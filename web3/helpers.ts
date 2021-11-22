import { BigNumber } from '@ethersproject/bignumber'
import { formatUnits } from '@ethersproject/units'

import { SUPPORTED_NETWORKS } from './constants'

export const getTransactionUrl = (chainId: number, hash: string): string =>
  `${SUPPORTED_NETWORKS[chainId].explorer}/tx/${hash}`

export const isSupportedChain = (chainId: number): boolean =>
  Object.values(SUPPORTED_NETWORKS).find(
    (network) => network.chainId === chainId
  ) !== undefined

export const timeout = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const formatAddress = (
  address: string | null | undefined,
  ensName?: string | null,
  chars = 4
): string => {
  if (ensName) return ensName
  else if (address)
    return `${address.substring(0, chars)}...${address.substring(
      address.length - chars
    )}`
  else return ''
}

export const formatNumber = (number: number): string => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
}

export const formatToUSD = (usdPrice: number, number?: BigNumber) => {
  const usdValue = usdPrice * Number(formatToken(number))
  return formatNumber(usdValue)
}

export const formatToken = (
  number?: BigNumber | string,
  decimals: string | number = 18
): string | undefined => {
  if (!number) {
    return
  }
  const num = BigNumber.from(number)
  const formatted = formatUnits(num, Number(decimals))
  const split = formatted.split('.')
  if (split.length > 1) {
    return split[0] + '.' + split[1].substr(0, 6)
  }
  return formatted
}
