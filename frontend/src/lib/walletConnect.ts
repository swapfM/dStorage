import { ethers } from "ethers";

export async function connectWallet(walletType: string) {
  if (walletType !== "metamask" || !window.ethereum) {
    throw new Error("Please install MetaMask.");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  const balance = await provider.getBalance(address);

  return {
    provider,
    signer,
    address,
    balance: ethers.formatEther(balance),
  };
}
