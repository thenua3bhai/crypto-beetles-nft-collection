const { ethers } = require("hardhat");
async function main() {
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles");
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET");

  await cryptoBeetles.deployed(); //why this ?
  console.log(`Contract successfully deployed to ${cryptoBeetles.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
