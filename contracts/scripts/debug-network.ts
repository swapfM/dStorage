// scripts/debug-network.js
const { ethers } = require("hardhat");

async function main() {
  console.log("🔍 Debugging Hardhat Network Connection\n");

  try {
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const network = await provider.getNetwork();

    console.log(`   Chain ID: ${network.chainId}`);
    console.log(`   Network Name: ${network.name}`);
    console.log("");
  } catch (err) {
    console.log(err);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
