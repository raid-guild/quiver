export const SUPPORTED_NETWORKS: {
  [chainId: number]: {
    chainId: number
    name: string
    symbol: string
    explorer: string
    rpc: string
  }
} = {
  1: {
    chainId: 1,
    name: 'Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io/',
    rpc: 'https://mainnet.infura.io/v3/f8a8e8f3f0e94b0c9b8d4c3c2b7a8d12',
  },
  4: {
    chainId: 4,
    name: 'Rinkeby',
    symbol: 'ETH',
    explorer: 'https://rinkeby.etherscan.io/',
    rpc: 'https://rinkeby.infura.io/v3/f8a8e8f3f0e94b0c9b8d4c3c2b7a8d12',
  },
  1337: {
    chainId: 1337,
    name: 'Hardhat',
    symbol: 'ETH',
    explorer: 'http://localhost:1234/',
    rpc: 'http://localhost:8545',
  },
}

export const AUTO_UPDATE_BALANCE_INTERVAL = 1000 * 5 // 15 seconds
export const DEFAULT_NETWORK = 1337
