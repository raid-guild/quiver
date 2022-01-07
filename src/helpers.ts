import { BigNumber } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';

export const parseTokenURI = (text: string) =>
  text.replace('ipfs://', 'https://ipfs.io/ipfs/');

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

export const formatNumber = (number: number): string => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const formatToUSD = (usdPrice: number, number?: BigNumber) => {
  const usdValue = usdPrice * Number(formatToken(number));
  return formatNumber(usdValue);
};

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

export const parseTxErrorMessage = (error: any) => {
  if (error?.error?.message && error.error.message.includes('reverted')) {
    return error.error.message.split('reverted:')[1];
  }

  if (error.reason) {
    return error.reason;
  }

  return error.message;
};
