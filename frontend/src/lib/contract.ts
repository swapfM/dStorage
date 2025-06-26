import { ethers } from "ethers";
import contractABI from "./StorageMarketplace.json";

const contractAddress = import.meta.env.VITE_APP_DEPLOY_ADDRESS;

export const getContract = async (signer: ethers.Signer) => {
  return new ethers.Contract(contractAddress, contractABI.abi, signer);
};
