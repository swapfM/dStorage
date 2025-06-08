<!-- src/components/WalletConnect.vue -->
<script setup lang="ts">
import { useUserStore } from "@/stores/useUserStore";

const userStore = useUserStore();

const connectWallet = async () => {
  await userStore.connectWallet();
};
</script>

<template>
  <div class="p-4 rounded shadow bg-gray-100 dark:bg-gray-800 max-w-sm">
    <button
      @click="connectWallet"
      class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
    >
      {{ userStore.isConnected ? "Wallet Connected" : "Connect Wallet" }}
    </button>

    <div v-if="userStore.isConnected" class="mt-4">
      <p><strong>Address:</strong> {{ userStore.walletAddress }}</p>
      <p><strong>Balance:</strong> {{ userStore.balance }}</p>
    </div>
  </div>
</template>
