# Connecting To a Wallet

Quiver exposes useful variables to connect to a wallet. Here is an example.

```jsx
import { formatAddress, useWallet } from "@raidguild/quiver";

const ConnectWallet: React.FC = () => {
  const { connectWallet, isConnecting, isConnected, disconnect, address } =
    useWallet();
  return (
    <>
      {!isConnected && (
        <button
          disabled={isConnecting}
          onClick={() => !isConnected && connectWallet()}
        >
          {isConnecting
            ? "Connecting..."
            : isConnected
            ? "Connected"
            : "Connect Wallet"}
        </button>
      )}
      {isConnected && (
        <>
          <h4 style={{ display: "inline" }}>{formatAddress(address)}</h4>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      )}
    </>
  );
};
```
