/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: "https://polygon-mumbai.g.alchemy.com/v2/GQoYlYBndP_P6LCYu1JlBbErSykwGX3K",
         accounts: ["01e05a44a91a8a23d78e3ba8c0e2d88a809745ebbfcbde4018db488e039af0fe"]
      }
   },
}