require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 400,
      },
    },
  },
  allowUnlimitedContractSize: true,
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // MATIC_MAINNET: {
    //   accounts: [`${process.env.PRIVATE_KEY}`],
    //   url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    // },
    MATIC_MUMBAI: {
      accounts: [`${process.env.PRIVATE_KEY}`],
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`,
  },
  paths: {
    artifacts: "../frontend/artifacts",
  },
  gasReporter: {
    enabled: true,
    currency: "INR",
    coinmarketcap: process.env.COINMARKETCAP,
    token: "matic",
    outputFile: "gasReports.txt",
    noColors: true,
  },
};