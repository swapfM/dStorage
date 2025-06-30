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
    name: "" as string,
    username: "" as string,
  }),

  persist: true,
});
