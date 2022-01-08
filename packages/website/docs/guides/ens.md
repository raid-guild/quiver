# ENS Hook

useENS allows you to get the address of the ENS name of ens from address along with avatar and methods to query address and ens.

## Usage

```jsx
// Signature
const useENS = ({
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
  getAddress: (ens: string) => Promise<string>;
  getEns: (address: string) => Promise<string>;
  loading: boolean;
}

// Usage - When Address is present
const { ens, avatar, loading } = useENS({ address: bid?.bidder.id ?? '' });

// Usage - When ENS is presnet
const { ens, avatar, loading } = useENS({ ens: bid?.bidder.ens ?? '' });

// Usage - When you want to fetch address / ens on event
const {getEns, getAddress} = useENS();

// get ens when address is present
const ens = await getEns(address)
// get address if ens is present
const address = await getAddress(ens)

// Usage - when you want to get a text record
const {resolver} = useENS({ens}) // can be address also
const avatar = await resolver.getText('avatar')
const github = await resolver.getText('com.github')
```
