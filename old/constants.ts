export const NETWORKS: {
  [chainId: string]: {
    chainId: number
    name: string
    symbol: string
    explorer: string
    rpc: string
  }
} = {
  '1': {
    chainId: 1,
    name: 'Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io/',
    rpc: 'https://mainnet.infura.io/v3/e039ebf983d0477ca69a543b1c62101a',
  },
  '4': {
    chainId: 4,
    name: 'Rinkeby',
    symbol: 'ETH',
    explorer: 'https://rinkeby.etherscan.io/',
    rpc: 'https://rinkeby.infura.io/v3/e039ebf983d0477ca69a543b1c62101a',
  }, 
  "1337": {
    chainId: 1337,
    name: 'Hardhat',
    symbol: 'ETH',
    explorer: 'http://localhost:1234/',
    rpc: 'http://localhost:8545',
  },
}

export const SUPPORTED_NETWORKS = process.env.SUPPORTED_NETWORKS || '4' // comma separated chain ids. "1,4,1337"

export const AUTO_UPDATE_BALANCE_INTERVAL = 1000 * 5 // 15 seconds
export const DEFAULT_NETWORK = process.env.DEFAULT_NETWORK || '4'
