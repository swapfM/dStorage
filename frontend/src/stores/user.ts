// src/stores/useUserStore.ts
import { defineStore } from "pinia";
import { ethers } from "ethers";

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
        this.provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await this.provider.getSigner();
        this.signer = signer;
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
  },
});
