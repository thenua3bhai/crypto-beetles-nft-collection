const { ethers } = require("hardhat");
const cryptoBeetlesJSON = require("../artifacts/contracts/CryptoBeetles.sol/CryptoBeetles.json");

// require("dotenv").config();   yaha ye kyu nhi use kiya hardhat.config.js m to kiya tha...   pata lgao iska exact use kya h

async function main() {
  const abi = cryptoBeetlesJSON.abi;
  const provider = new ethers.providers.InfuraProvider("goerli", process.env.PROJECT_ID);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const signer = wallet.connect(provider);
  const cryptoBeetles = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);
  //minting first nft
  const newItemId = await cryptoBeetles.mint("https://ipfs.io/ipfs/bafkreietyekxn7umbrglnikjycbs7qimipjrn3byesf2xm5u5llbuhwcti"); //this ipfs link is of json file url deployed on ipfs.(using nft.storage and the link in json also is of nft.storage and same the used image link also of nft.storage generated. and the other two images and json file link are from pinata to test both. And all nfts are listed on test opensea using mumbai polygon testnet
  console.log(`NFT 1 minted successfully :: ${newItemId}`);

  await cryptoBeetles.mint("https://ipfs.io/ipfs/QmUT1CtTVkiy64o2eyRfguS4vxcs9KeQ68cBMhpGUX5JDh");
  console.log("NFT 2 minted!");

  await cryptoBeetles.mint("https://ipfs.io/ipfs/QmRGNeFvupSSq96WxoYeRAjuvGpYQxdjpLXkBBHgX3pFM6"); //these links are from pinata storage
  console.log("NFT 3 minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
