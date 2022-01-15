import {
  NetworkConfig, WalletProvider
} from '@raidguild/quiver';
import { AppProps } from "next/app";
import { ICoreOptions, IProviderOptions } from 'web3modal';



function MyApp({ Component, pageProps }: AppProps) {

  const networks: NetworkConfig = {
    '0x1': {
      chainId: '0x1',
      name: 'Mainnet',
      symbol: 'ETH',
      explorer: 'https://etherscan.io',
      rpc: 'https://mainnet.infura.io/v3/e039ebf983d0477ca69a543b1c62101a', // replace with your infura rpc id
    },
    "0x4": {
      chainId: "0x4",
      name: 'Rinkeby',
      symbol: 'ETH',
      explorer: 'https://rinkeby.etherscan.io',
      rpc: 'https://rinkeby.infura.io/v3/e039ebf983d0477ca69a543b1c62101a', // replace with your infura rpc id
    },
    "0x539": {
      chainId: '0x539',
      name: 'Hardhat',
      symbol: 'ETH',
      explorer: 'http://localhost:1234',
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
        defaultChainId={'0x1'}
        handleModalEvents={(eventName, error) => {
          if (error) {
            console.error(error.message);
          }
  
          console.log(eventName);
        }}
      >
          <Component {...pageProps} />
    </WalletProvider>
  );
}

export default MyApp;