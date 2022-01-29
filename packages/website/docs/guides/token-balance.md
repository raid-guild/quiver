# Token Balance

## Usage

### ERC20 Token

```jsx
// ERC20 Contract can use the ERC20_ABI included in Quiver
const { contract: erc20Contract } = useContract(
  ERC20_TOKEN_CONTRACT_ADDRESS,
  ERC20_ABI
);
const erc20Balance = useTokenBalance(erc20Contract);
```

### Network Token (Ex. ETH)

You do not need to use the hook to retrieve network token balance as ethers already provides a method to retrieve the balance.

```jsx
const { provider, address } = useWallet();
const [ethBalance, setEthBalance] = useState(BigNumber.from(0));

useEffect(() => {
  if (!address) return;
  if (!provider) return;

  const getEthBalance = async (address) => {
    const balance = await provider.getBalance(address); // can also set a custom address
    setEthBalance(balance);
  };
  getEthBalance(address); // can be a custom address
}, [provider, address]);
```

### Custom Contract

```jsx
const { contract: ufoContract } = useTypedContract(
  UFO_TOKEN_CONTRACT_ADDRESS,
  XToken__factory
)

const ufoBalance = useTokenBalance(ufoContract as XToken)

```

### Custom Wallet

```jsx
const { contract: erc20Contract } = useContract(
  ERC20_TOKEN_CONTRACT_ADDRESS,
  ERC20_ABI
);
const erc20Balance = useTokenBalance(erc20Contract, walletAddress); // by default it uses the connected wallet
```

### Auto Update

```jsx
const { contract: erc20Contract } = useContract(
  ERC20_TOKEN_CONTRACT_ADDRESS,
  ERC20_ABI
);
const erc20Balance = useTokenBalance(erc20Contract, undefined, 15000); // auto update every 15 seconds
```
