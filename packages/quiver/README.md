# Quiver

A collection of React hooks and components, making it easy to develop frontends for Ethereum dApps, especially for first time web3 frontend developers. Quiver Aims to decrease the time it takes to integrate from 15 hours to 2 hours.

## Features

- Powered by the popular [ethers](https://ethers.org/) package, which handles all ethereum functionality.
- Built-in support for connecting to wallets using [Web3Modal](https://github.com/Web3Modal/web3modal).
- Full support for TypeScript out of the box, including fully-typed contracts with [TypeChain](https://github.com/dethcrypto/TypeChain).

## Hidden Nuggets

Quiver comes with many useful features that are otherwise configured by developers all the time.

- Auto-update values when reading from the contract
- Use static provider without needing to connect to wallet and automatically switch to wallet provider once connected.
- Cache provider will automatically connect to wallet, but it wont if user's Metamask is locked
- ENS Integrations
- Gnosis Safe Apps Integration
- Common contracts are already included in quiver (ERC20 and ERC721)
- Works with Create React App and Next.js and possibly other React frameworks

## Requirements

- ethers
- react >= 16
- web3modal

Docs can be found at https://raid-guild.github.io/quiver/

## Thanks

Heavily inspired by [Ethereal React](https://github.com/kesne/ethereal-react)
