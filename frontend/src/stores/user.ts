// src/stores/useUserStore.ts
import { defineStore } from "pinia";
import { ethers } from "ethers";
import { getContract } from "@/lib/contract";
import { markRaw } from "vue";

export const useUserStore = defineStore("user", {
  state: () => ({
    walletAddress: "" as string,
    isConnected: false,
    provider: null as ethers.BrowserProvider | null,
    signer: null as ethers.Signer | null,
    balance: "" as string,
  }),

  actions: {
    async connectWallet() {
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }

      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.BrowserProvider(window.ethereum);
        this.provider = markRaw(provider);

        const signer = await provider.getSigner();
        this.signer = markRaw(signer);

        this.walletAddress = await signer.getAddress();
        this.isConnected = true;

        await this.fetchBalance();
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    },

    async fetchBalance() {
      if (!this.provider || !this.walletAddress) return;
      const balanceBigInt = await this.provider.getBalance(this.walletAddress);

      this.balance = ethers.formatEther(balanceBigInt) + " ETH";
    },

    disconnectWallet() {
      this.walletAddress = "";
      this.isConnected = false;
      this.provider = null;
      this.signer = null;
      this.balance = "";
    },

    async registerAsProvider() {
      if (!this.signer) {
        alert("Wallet not connected");
        return;
      }

      try {
        const contract = await getContract(this.signer);
        const tx = await contract.registerProvider({
          value: ethers.parseEther("0.1"),
        });
        await tx.wait();
        await this.fetchBalance();
        alert("You are now registered as a provider!");
      } catch (err) {
        console.error("Contract call failed:", err);
        alert("Error: " + (err as any).message);
      }
    },
  },
});
