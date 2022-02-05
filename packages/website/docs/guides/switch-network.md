# Switching Network

If you do not provide defaultChainId, the network will not auto switch. Usually, this is needed for applications that support multiple networks.

Quiver provides a method that would allow you to switch to a different network. Here's a pseudo code example:

There are some preconditions to using switch network

1. User needs to have metamask installed.
2. The network you are switching to should be configured in the list of supported networks

```jsx
const { switchNetwork } = useWallet();

return (
  <>
    <button onClick={() => switchNetwork("0x1")}>Switch to Mainnet</button>
    <button onClick={() => switchNetwork("0x4")}>Switch to Rinkeby</button>
  </>
);
```
