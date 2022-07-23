const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const CreatorNFT = await hre.ethers.getContractFactory("CreatorNFT");
  const nftMarketplace = await NFTMarketplace.deploy();
  const creatorNFT = await CreatorNFT.deploy();
  await nftMarketplace.deployed();
  await creatorNFT.deployed();
  console.log("nftMarketplace deployed to:", nftMarketplace.address);
  console.log("creatorNFT deployed to:", creatorNFT.address);

  fs.writeFileSync('./config.js', `
  export const marketplaceAddress = "${nftMarketplace.address}"
  export const creatorAddress = "${creatorNFT.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
