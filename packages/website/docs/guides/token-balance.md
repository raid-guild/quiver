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

### Custom Contract

```jsx
const { contract: ufoContract } = useContract(
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
