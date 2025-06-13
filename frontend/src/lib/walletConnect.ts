import { ethers } from "ethers";
export async function connectWallet(walletType: string) {
  if (walletType !== "metamask" || !window.ethereum) {
    throw new Error("Please install MetaMask.");
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.BrowserProvider(window.ethereum);
    console.log("Provider created");

    // Check network
    const network = await provider.getNetwork();
    console.log("Network:", network.name, "Chain ID:", network.chainId);

    const signer = await provider.getSigner();
    console.log("Signer obtained");

    const address = await signer.getAddress();
    console.log("Address:", address);

    const balanceBigInt = await provider.getBalance(address);
    console.log("Balance BigInt:", balanceBigInt.toString());

    const balance = ethers.formatEther(balanceBigInt);
    console.log("Formatted balance:", balance);

    return {
      provider,
      signer,
      address,
      balance,
      network: network.name,
      chainId: network.chainId,
    };
  } catch (error) {
    console.error("Error details:", error);
    throw error;
  }
}
