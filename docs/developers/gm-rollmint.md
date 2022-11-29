---
sidebar_label: Build a Sovereign Rollup
---

# 🗞 Building a Sovereign Rollup

The Ignite CLI comes with scaffolding commands to make development of
blockchains quicker by creating everything that is needed to start a new
Cosmos SDK blockchain.

Open a new tab or window in your terminal and run this command to scaffold your rollup:

```bash
ignite scaffold chain gm
```

The response will look similar to below:

```bash
jcs @ ~ % ignite scaffold chain gm

⭐️ Successfully created a new blockchain 'gm'.
👉 Get started with the following commands:

 % cd gm
 % ignite chain serve

Documentation: https://docs.ignite.com
```

This command has created a Cosmos SDK blockchain in the `gm` directory. The
`gm` directory contains a fully functional blockchain. The following standard
Cosmos SDK [modules](https://docs.cosmos.network/master/modules/) have been
imported:

- `staking` - for delegated Proof-of-Stake (PoS) consensus mechanism
- `bank` - for fungible token transfers between accounts
- `gov` - for on-chain governance
- `mint` - for minting new units of staking token
- `nft` - for creating, transferring, and updating NFTs
- and [more](https://docs.cosmos.network/master/architecture/adr-043-nft-module.html)

Change to the `gm` directory:

```bash
cd gm
```

You can learn more about the `gm` directory’s file structure [here](https://docs.ignite.com/guide/hello#blockchain-directory-structure).
Most of our work in this tutorial will happen in the `x` directory.

## 💎 Installing Rollmint

To swap out Tendermint for Rollmint, run the following command:

```bash
go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk-rollmint@v0.46.3-rollmint-v0.4.0
go mod tidy
go mod download
```
