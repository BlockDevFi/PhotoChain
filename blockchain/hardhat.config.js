require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
const URL = "https://goerli.infura.io/v3/a25eb1e4e3a14e84af96ed88d1d4310e"
const PRIVATE_KEY = "0de6d6c050c9b733be7377d54b01be0c4cf035110a73b19e7289812cd1ee5f7b"
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
