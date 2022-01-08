import { BigNumber } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';

/**
 * Converts an ipfs:// link to an HTTP IPFS url https://ipfs.io/ipfs/<hash>
 * @category Helpers
 */
export const parseTokenURI = (text: string) =>
  text.replace('ipfs://', 'https://ipfs.io/ipfs/');

/**
 * Given an address, format and truncate the address from middle.
 * @category Helpers
 */
export const formatAddress = (
  address: string | null | undefined,
  ensName?: string | null,
  chars = 5
): string => {
  if (ensName) return ensName;
  else if (address)
    return `${address.substring(0, chars)}...${address.substring(
      address.length - chars
    )}`;
  else return '';
};

/**
 * Converts a number to the localaized string representation.
 * @category Helpers
 */
export const formatNumber = (number: number): string => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

/**
 * Returns a localized string representation of a BigNumber multiplied by a currency unit
 * @category Helpers
 */
export const formatToUSD = (usdPrice: number, number?: BigNumber) => {
  const usdValue = usdPrice * Number(formatToken(number));
  return formatNumber(usdValue);
};

/**
 * Formats a Bignumber to a string and displays 6 decimal places.
 * @category Helpers
 */
export const formatToken = (
  number?: BigNumber | string,
  decimals: string | number = 18
): string | undefined => {
  if (!number) {
    return;
  }
  const num = BigNumber.from(number);
  const formatted = formatUnits(num, Number(decimals));
  const split = formatted.split('.');
  if (split.length > 1) {
    return split[0] + '.' + split[1].substr(0, 6);
  }
  return formatted;
};

/**
 * Parses the errors returned from RPC calls and returns the error message string. Useful to display it in toast messages.
 * @category Helpers
 */
export const parseTxErrorMessage = (error: any) => {
  if (error?.error?.message && error.error.message.includes('reverted')) {
    return error.error.message.split('reverted:')[1];
  }

  if (error.reason) {
    return error.reason;
  }

  return error.message;
};
