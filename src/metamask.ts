import { utils } from 'ethers';

import { NetworkConfig } from './WalletContext';

export const switchChainOnMetaMask = async (
  networks: NetworkConfig,
  chainId: number
): Promise<boolean> => {
  if (!networks[chainId]) return false;

  const { name, symbol } = networks[chainId] || {};
  const networkName = networks[chainId].name;
  const rpcUrl = networks[chainId].rpc;
  const explorerUrl = networks[chainId].explorer;

  if (
    !(name && symbol && networkName && rpcUrl && explorerUrl && window.ethereum)
  )
    return false;

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId: utils.hexValue(chainId),
        },
      ],
    });
    return true;
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if ((switchError as any).code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: utils.hexValue(chainId),
              chainName: networkName,
              nativeCurrency: {
                name,
                symbol,
                decimals: 18,
              },
              rpcUrls: [rpcUrl],
              blockExplorerUrls: [explorerUrl],
            },
          ],
        });
        return true;
      } catch (addError) {
        // eslint-disable-next-line no-console
        console.error('Unable to add chain to metamask', addError);
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('Unable to switch to chain on metamask', switchError);
    }
  }
  return false;
};
