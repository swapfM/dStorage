import { ethers } from "hardhat";
import { StorageMarketplace } from "../typechain-types/StorageMarketplace";

async function main() {
  const StorageMarketplace = await ethers.getContractFactory(
    "StorageMarketplace"
  );

  const storageMarketplace = await StorageMarketplace.deploy();

  await storageMarketplace.waitForDeployment();

  console.log("Contract deployed at:", storageMarketplace.target);
}

main()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
