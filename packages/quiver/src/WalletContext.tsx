import { SafeAppWeb3Modal } from '@gnosis.pm/safe-apps-web3modal';
import { providers } from 'ethers';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ICoreOptions } from 'web3modal';

import { switchChainOnMetaMask } from './metamask';

type WalletContextType = {
  provider: providers.Web3Provider | null | undefined;
  chainId: string | null | undefined;
  address: string | null | undefined;
  connectWallet: () => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
  isConnected: boolean;
  isMetamask: boolean;
  networks: NetworkConfig;
  switchNetwork: (chainId: string) => void;
};

const WalletContext = createContext<WalletContextType>({
  provider: null,
  chainId: null,
  address: null,
  connectWallet: async () => undefined,
  disconnect: () => undefined,
  isConnecting: true,
  isConnected: false,
  isMetamask: false,
  networks: {},
  switchNetwork: () => undefined,
});

type WalletStateType = {
  provider?: providers.Web3Provider | null;
  chainId?: string | null;
  address?: string | null;
};

export type NetworkConfig = {
  [chainId: string]: {
    chainId: string;
    name: string;
    symbol: string;
    explorer: string;
    rpc: string;
  };
};

const isMetamaskProvider = (
  provider: providers.Web3Provider | null | undefined
) => provider?.connection?.url === 'metamask';

/**
 * @category Providers
 */
export const WalletProvider: React.FC<{
  web3modalOptions: Partial<ICoreOptions>;
  networks: NetworkConfig;
  defaultChainId?: string;
  handleModalEvents?: (
    eventName: 'error' | 'accountsChanged' | 'chainChanged',
    error?: { code: string; message: string }
  ) => void;
}> = ({
  children,
  web3modalOptions,
  networks,
  defaultChainId,
  handleModalEvents,
}) => {
  const [{ provider, chainId, address }, setWalletState] =
    useState<WalletStateType>({});

  const isConnected: boolean = useMemo(
    () => !!provider && !!address && !!chainId,
    [provider, address, chainId]
  );

  const [isConnecting, setConnecting] = useState<boolean>(true);
  const isMetamask = useMemo(() => isMetamaskProvider(provider), [provider]);

  const getModal = () => {
    const modal = new SafeAppWeb3Modal(web3modalOptions);
    return modal;
  };

  const disconnect = async () => {
    const modal = getModal();
    modal.clearCachedProvider();
    setWalletState({});
  };

  const numberToHex = (number: number) => {
    return `0x${number.toString(16)}`;
  };

  const switchNetwork = async (_chainId: string | number) => {
    const chainId: string =
      typeof _chainId === 'number' ? numberToHex(_chainId) : _chainId;
    if (!networks[chainId]) {
      throw new Error(`No network configuration for chainId: ${chainId}`);
    }
    if (!window.ethereum?.isMetaMask) {
      throw new Error('Switching chain is only supported in Metamask');
    }
    await switchChainOnMetaMask(networks, chainId);
  };

  const setWalletProvider = async (provider: any) => {
    const ethersProvider = new providers.Web3Provider(provider);
    let chainId: string =
      typeof provider.chainId === 'number'
        ? numberToHex(provider.chainId)
        : provider.chainId;

    if (!networks[chainId]) {
      if (!defaultChainId) {
        handleModalEvents &&
          handleModalEvents('error', {
            code: 'UNSUPPORTED_NETWORK',
            message: `Network not supported, please switch to one of the supported networks`,
          });
        return;
      }
      const success =
        isMetamaskProvider(ethersProvider) &&
        (await switchChainOnMetaMask(networks, defaultChainId));
      if (!success) {
        handleModalEvents &&
          handleModalEvents('error', {
            code: 'UNSUPPORTED_NETWORK',
            message: `Network not supported, please switch to ${networks[defaultChainId].name}`,
          });
        return;
      }
      chainId = defaultChainId;
    }

    const signerAddress = await ethersProvider.getSigner().getAddress();
    setWalletState({
      provider: ethersProvider,
      chainId,
      address: signerAddress,
    });
  };

  const connectWallet = async () => {
    try {
      setConnecting(true);
      const modal = getModal();
      const modalProvider = await modal.requestProvider();

      await setWalletProvider(modalProvider);

      const _isGnosisSafe = await modal.isSafeApp();

      if (!_isGnosisSafe) {
        modalProvider.on('accountsChanged', () => {
          disconnect();
          handleModalEvents && handleModalEvents('accountsChanged');
        });
        modalProvider.on('chainChanged', () => {
          handleModalEvents && handleModalEvents('chainChanged');
          if (!networks[modalProvider.chainId]) {
            disconnect();
            handleModalEvents &&
              handleModalEvents('error', {
                code: 'UNSUPPORTED_NETWORK',
                message: `You have switched to an unsupported chain, Disconnecting from Metamask...`,
              });
          }
          // update wallet provider once the chain is changed
          setWalletProvider(modalProvider);
        });
      }
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
      const modal = getModal();
      const _isGnosisSafe = await modal.isSafeApp();

      if (
        isMetamaskUnlocked &&
        (_isGnosisSafe || web3modalOptions.cacheProvider)
      ) {
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
        switchNetwork,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

/**
 * Gets the wallet context from the wallet provider
 * @category Hooks
 */
export const useWallet = (): WalletContextType => useContext(WalletContext);
