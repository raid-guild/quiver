import { providers } from 'ethers';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-hot-toast';
import Core from 'web3modal';
import Web3Modal, { ICoreOptions } from 'web3modal';

import { switchChainOnMetaMask } from './metamask';

export type WalletContextType = {
  provider: providers.Web3Provider | null | undefined;
  chainId: number | null | undefined;
  address: string | null | undefined;
  connectWallet: () => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
  isConnected: boolean;
  isMetamask: boolean;
  networks: NetworkConfig;
  defaultNetwork: number;
};

export const WalletContext = createContext<WalletContextType>({
  provider: null,
  chainId: null,
  address: null,
  connectWallet: async () => undefined,
  disconnect: () => undefined,
  isConnecting: true,
  isConnected: false,
  isMetamask: false,
  networks: {},
  defaultNetwork: 0,
});

type WalletStateType = {
  provider?: providers.Web3Provider | null;
  chainId?: number | null;
  address?: string | null;
};

export type NetworkConfig = {
  [chainId: number]: {
    chainId: number;
    name: string;
    symbol: string;
    explorer: string;
    rpc: string;
  };
};

const isMetamaskProvider = (
  provider: providers.Web3Provider | null | undefined
) => provider?.connection?.url === 'metamask';

export const WalletProvider: React.FC<{
  web3modalOptions: Partial<ICoreOptions>;
  networks: NetworkConfig;
  defaultNetwork: number;
}> = ({ children, web3modalOptions, networks, defaultNetwork }) => {
  const [{ provider, chainId, address }, setWalletState] = useState<
    WalletStateType
  >({});

  const [web3Modal, setWeb3Modal] = useState<Core>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWeb3Modal(new Web3Modal(web3modalOptions));
    }
  }, [typeof window]);

  console.log({ web3modalOptions, networks, defaultNetwork, web3Modal });

  const isConnected: boolean = useMemo(
    () => !!provider && !!address && !!chainId,
    [provider, address, chainId]
  );

  const [isConnecting, setConnecting] = useState<boolean>(true);
  const isMetamask = useMemo(() => isMetamaskProvider(provider), [provider]);

  const disconnect = async () => {
    web3Modal?.clearCachedProvider();
    setWalletState({});
  };

  const setWalletProvider = async (provider: any) => {
    const ethersProvider = new providers.Web3Provider(provider);

    let network = Number(provider.chainId);
    if (!networks[network]) {
      const success =
        isMetamaskProvider(ethersProvider) &&
        (await switchChainOnMetaMask(
          networks,
          networks[defaultNetwork].chainId
        ));
      if (!success) {
        const errorMsg = `Network not supported, please switch to ${networks[defaultNetwork].name}`;
        toast.error(errorMsg);
        throw new Error(errorMsg);
      }
      network = networks[defaultNetwork].chainId;
    }

    const signerAddress = await ethersProvider.getSigner().getAddress();
    setWalletState({
      provider: ethersProvider,
      chainId: network,
      address: signerAddress,
    });
  };

  const connectWallet = async () => {
    try {
      setConnecting(true);

      const modalProvider = await web3Modal?.connect();

      await setWalletProvider(modalProvider);

      modalProvider.on('accountsChanged', () => {
        disconnect();
      });
      modalProvider.on('chainChanged', () => {
        if (!networks[Number(modalProvider.chainId)]) {
          console.log(
            'You have switched to an unsupported chain, Disconnecting from Metamask...'
          );
          disconnect();
        }
      });
    } catch (web3Error) {
      // eslint-disable-next-line no-console
      console.error(web3Error);
      disconnect();
    } finally {
      setConnecting(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      /**
       * Only try to connect when metamask is unlocked.
       * This prevents unnecessary popup on page load.
       */
      const isMetamaskUnlocked =
        (await window.ethereum?._metamask?.isUnlocked()) ?? false;
      if (isMetamaskUnlocked && web3Modal?.cachedProvider) {
        await connectWallet();
      } else {
        setConnecting(false);
      }
    };
    load();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        provider,
        address,
        chainId,
        connectWallet,
        isConnected,
        isConnecting,
        disconnect,
        isMetamask,
        networks,
        defaultNetwork,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => useContext(WalletContext);
