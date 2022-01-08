import {
  NetworkConfig, WalletProvider
} from '@raidguild/quiver';
import { AppProps } from "next/app";
import { ICoreOptions, IProviderOptions } from 'web3modal';



function MyApp({ Component, pageProps }: AppProps) {

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
    // Other providers
  };
  
  const web3modalOptions: Partial<ICoreOptions> = {
    cacheProvider: true,
    providerOptions,
    theme: 'dark',
  };
  
  return (
    <WalletProvider
        web3modalOptions={web3modalOptions}
        networks={networks}
        defaultNetwork={1}
      >
          <Component {...pageProps} />
    </WalletProvider>
  );
}

export default MyApp;