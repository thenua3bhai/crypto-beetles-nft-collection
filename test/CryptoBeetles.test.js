const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CryptoBeetles", function () {
  let contract;

  beforeEach(async function () {
    const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles");
    contract = await CryptoBeetles.deploy("CryptoBeetles", "CBEET");
    await contract.deployed();
  });

  it("should have a name and symbol", async function () {
    expect(await contract.name()).to.equal("CryptoBeetles");
    expect(await contract.symbol()).to.equal("CBEET");
  });

  it("should allow minting of tokens", async function () {
    await contract.mint("https://example.com/token1.json");
    expect(await contract.balanceOf(await ethers.getSigner(0).getAddress())).to.equal(1);
  });

  it("should set the token URI correctly", async function () {
    const tokenURI = "https://example.com/token1.json";
    await contract.mint(tokenURI);
    const tokenId = 0;
    expect(await contract.tokenURI(tokenId)).to.equal(tokenURI);
  });
});
