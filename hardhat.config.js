// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
const secrets = require('./secrets.json')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    gl: {
      url: `https://staging.edge.guardianlink.io`,
      accounts: [secrets.pkey]
    },
    polygon: {
      url: ` https://matic-mumbai.chainstacklabs.com`,
      accounts: [secrets.pkey]
    }
  }

};