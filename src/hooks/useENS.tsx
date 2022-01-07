import { useEffect, useState } from 'react';
import { useWallet } from '../WalletContext';
import { JsonRpcProvider, Resolver } from '@ethersproject/providers';

export const useENS = ({
  ens,
  address,
}: {
  ens?: string;
  address?: string;
}): {
  ens?: string;
  address?: string;
  resolver?: Resolver;
  avatar?: string;
  getAddress: (ens: string) => Promise<string | undefined>;
  getEns: (address: string) => Promise<string | undefined>;
  loading: boolean;
} => {
  const [localENS, setLocalENS] = useState<string>();
  const [localAddress, setLocalAddress] = useState<string>();
  const [avatar, setAvatar] = useState<string>();
  const [resolver, setResolver] = useState<Resolver>();
  const [loading, setLoading] = useState(false);

  const { isConnected, provider, networks, defaultNetwork } = useWallet();
  const localProvider = !isConnected
    ? new JsonRpcProvider(networks[defaultNetwork].rpc, defaultNetwork)
    : provider;

  const populateENS = async () => {
    if (!localProvider) return;

    try {
      setLoading(true);
      if (ens) {
        const resolver = await (localProvider as JsonRpcProvider).getResolver(
          ens
        );
        const address = resolver?.address;
        const avatar = await resolver?.getAvatar();
        setLocalENS(ens);
        setLocalAddress(address);
        setAvatar(avatar?.url);
        setResolver(resolver as Resolver);
        return;
      }
      if (address) {
        const ens = await (localProvider as JsonRpcProvider).lookupAddress(
          address
        );
        const resolver = await (localProvider as JsonRpcProvider).getResolver(
          ens ?? ''
        );
        const avatar = await resolver?.getAvatar();
        setLocalENS(ens ?? undefined);
        setLocalAddress(address);
        setAvatar(avatar?.url);
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    populateENS();
  }, [isConnected]);

  const getAddress = async (ens: string) => {
    const resolver = await (localProvider as JsonRpcProvider).getResolver(ens);
    const address = resolver?.address;
    return address;
  };

  const getEns = async (address: string) => {
    const ens = await (localProvider as JsonRpcProvider).lookupAddress(address);
    return ens ?? undefined;
  };

  return {
    ens: localENS,
    address: localAddress,
    avatar,
    resolver,
    getAddress,
    getEns,
    loading,
  };
};
