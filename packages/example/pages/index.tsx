import {
  ERC20_ABI, formatAddress, useContract, useENS, useTokenBalance, useWallet
} from '@raidguild/quiver';

const ConnectWallet: React.FC = () => {
  const {
    connectWallet,
    isConnecting,
    isConnected,
    disconnect,
    address,
  } = useWallet();
  return (
    <>
      {!isConnected && (
        <button
          disabled={isConnecting}
          onClick={() => !isConnected && connectWallet()}
        >
          {isConnecting
            ? 'Connecting...'
            : isConnected
            ? 'Connected'
            : 'Connect Wallet'}
        </button>
      )}
      {isConnected && (
        <>
          <h4 style={{ display: 'inline' }}>{formatAddress(address)}</h4>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      )}
    </>
  );
};

const DAIBalance = () => {
  const { contract: daiStaticContract } = useContract(
    '0x6b175474e89094c44da98b954eedeac495271d0f',
    ERC20_ABI,
    {
      useStaticProvider: true,
    }
  );

  const { contract: daiContract } = useContract(
    '0x6b175474e89094c44da98b954eedeac495271d0f',
    ERC20_ABI
  );

  const balanceStatic = useTokenBalance(
    daiStaticContract,
    '0xe938779274d4C76FA84946241A0f474694085D7f' // put your address (optional)
  );

  const balance = useTokenBalance(
    daiContract,
    '0xe938779274d4C76FA84946241A0f474694085D7f'
  );

  return (
    <>
      <p>
        Using Static RPC - {balanceStatic.toString()} (will switch to connected
        provider once connected to wallet)
      </p>
      <p>Using Connected Provider - {balance.toString()}</p>
    </>
  );
};


export default function Home() {

  const { address } = useWallet();
  const { ens } = useENS({address: address ?? undefined});
  return (
    <>
     <div>
          <h1>Connect to Wallet</h1>
          <ConnectWallet />
        </div>

        <div>
          <h1>Your DAI Balance on mainnet</h1>
          <DAIBalance />
        </div>

        <div>
          <h1>More examples coming soon</h1>
        </div>

        <div>Resolved ENS: {ens}</div>
        </>
  )
}
