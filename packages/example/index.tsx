import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ICoreOptions, IProviderOptions } from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import {
  useWallet,
  NetworkConfig,
  formatAddress,
  WalletProvider,
  useTokenBalance,
  useContract,
  ERC20_ABI,
} from '@raidguild/quiver';
const networks: NetworkConfig = {
  1: {
    chainId: 1,
    name: 'Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io/',
    rpc: 'https://mainnet.infura.io/v3/e039ebf983d0477ca69a543b1c62101a', // replace with your infura rpc id
  },
  4: {
    chainId: 4,
    name: 'Rinkeby',
    symbol: 'ETH',
    explorer: 'https://rinkeby.etherscan.io/',
    rpc: 'https://rinkeby.infura.io/v3/e039ebf983d0477ca69a543b1c62101a', // replace with your infura rpc id
  },
  1337: {
    chainId: 1337,
    name: 'Hardhat',
    symbol: 'ETH',
    explorer: 'http://localhost:1234/',
    rpc: 'http://localhost:8545',
  },
};

const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: networks[1].rpc,
        4: networks[4].rpc,
        1337: networks[1337].rpc,
      },
    },
  },
};

const web3modalOptions: Partial<ICoreOptions> = {
  cacheProvider: true,
  providerOptions,
  theme: 'dark',
};

const ConnectWallet: React.FC = () => {
  const {
    connectWallet,
    isConnecting,
    isConnected,
    disconnect,
    address,
  } = useWallet();
  return (
    <>
      {!isConnected && (
        <button
          disabled={isConnecting}
          onClick={() => !isConnected && connectWallet()}
        >
          {isConnecting
            ? 'Connecting...'
            : isConnected
            ? 'Connected'
            : 'Connect Wallet'}
        </button>
      )}
      {isConnected && (
        <>
          <h4 style={{ display: 'inline' }}>{formatAddress(address)}</h4>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      )}
    </>
  );
};

const DAIBalance = () => {
  const { contract: daiStaticContract } = useContract(
    '0x6b175474e89094c44da98b954eedeac495271d0f',
    ERC20_ABI,
    {
      useStaticProvider: true,
    }
  );

  const { contract: daiContract } = useContract(
    '0x6b175474e89094c44da98b954eedeac495271d0f',
    ERC20_ABI
  );

  const balanceStatic = useTokenBalance(
    daiStaticContract,
    '0xe938779274d4C76FA84946241A0f474694085D7f' // put your address (optional)
  );

  const balance = useTokenBalance(
    daiContract,
    '0xe938779274d4C76FA84946241A0f474694085D7f'
  );

  return (
    <>
      <p>
        Using Static RPC - {balanceStatic.toString()} (will switch to connected
        provider once connected to wallet)
      </p>
      <p>Using Connected Provider - {balance.toString()}</p>
    </>
  );
};

const App = () => {
  if (window) {
    return (
      <WalletProvider
        web3modalOptions={web3modalOptions}
        networks={networks}
        defaultNetwork={1}
      >
        <div>
          <h1>Connect to Wallet</h1>
          <ConnectWallet />
        </div>

        <div>
          <h1>Your DAI Balance on mainnet</h1>
          <DAIBalance />
        </div>

        <div>
          <h1>More examples coming soon</h1>
        </div>
      </WalletProvider>
    );
  }
  return <div>Loading...</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
