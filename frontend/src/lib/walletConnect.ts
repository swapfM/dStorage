import { ethers } from "ethers";

export async function connectWallet(walletType: string) {
  if (walletType !== "metamask" || !window.ethereum) {
    throw new Error("Please install MetaMask.");
  }

  try {
    // Request account access
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.BrowserProvider(window.ethereum);
    console.log("Provider created");

    const signer = await provider.getSigner();
    console.log("Signer obtained");

    const address = await signer.getAddress();
    console.log("Address:", address);

    const balanceBigInt = await provider.getBalance(address);
    console.log("Balance:", balanceBigInt);
    const balance = ethers.formatEther(balanceBigInt);

    return {
      provider,
      signer,
      address,
      balance,
    };
  } catch (error) {
    console.error("Wallet connection or balance fetch failed:", error);
    throw error;
  }
}
