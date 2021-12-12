import WalletConnectProvider from '@walletconnect/web3-provider'
import { WalletLink } from 'walletlink'
import { IProviderOptions } from 'web3modal'

import CoinbaseLogo from './images/coinbase-wallet.svg'

import { NETWORKS } from './constants'

interface ConnectorOptions {
  appName: string
  networkUrl: string
  chainId: number
}

export const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: NETWORKS["1"].rpc,
        4: NETWORKS["4"].rpc,
        1337: NETWORKS["1337"].rpc,
      },
    },
  },
  'custom-walletlink-matic': {
    display: {
      logo: CoinbaseLogo,
      name: 'Coinbase Matic',
      description: 'Scan with WalletLink to connect',
    },
    options: {
      appName: 'App Name',
      networkUrl: NETWORKS["137"],
      chainId: 137,
    },
    package: WalletLink,
    connector: async (_: unknown, options: ConnectorOptions) => {
      const { appName, networkUrl, chainId } = options
      const walletLink = new WalletLink({
        appName,
      })
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
      await provider.enable()
      return provider
    },
  },
}
