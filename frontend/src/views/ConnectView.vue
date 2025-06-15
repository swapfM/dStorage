<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6"
  >
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <router-link
          to="/"
          class="inline-flex items-center text-gray-300 hover:text-white mb-6"
        >
          <ArrowLeft class="w-4 h-4 mr-2" />
          Back to Home
        </router-link>
        <div
          class="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Shield class="w-8 h-8 text-white" />
        </div>
        <h1 class="text-3xl font-bold text-white mb-2">Connect Your Wallet</h1>
        <p class="text-gray-300">Choose your preferred wallet to get started</p>
      </div>

      <div class="space-y-4">
        <Card
          class="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          @click="handleConnect('metamask')"
        >
          <CardContent class="p-6">
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center"
              >
                <Wallet class="w-6 h-6 text-white" />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-white">MetaMask</h3>
                <p class="text-gray-300 text-sm">
                  Connect using MetaMask wallet
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          class="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          @click="handleConnect('walletconnect')"
        >
          <CardContent class="p-6">
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center"
              >
                <Wallet class="w-6 h-6 text-white" />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-white">WalletConnect</h3>
                <p class="text-gray-300 text-sm">Connect using WalletConnect</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          class="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          @click="handleConnect('coinbase')"
        >
          <CardContent class="p-6">
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center"
              >
                <Wallet class="w-6 h-6 text-white" />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-white">
                  Coinbase Wallet
                </h3>
                <p class="text-gray-300 text-sm">
                  Connect using Coinbase Wallet
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card
        v-if="isConnecting"
        class="mt-6 bg-white/5 backdrop-blur-sm border-white/10"
      >
        <CardContent class="p-6 text-center">
          <div
            class="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          ></div>
          <p class="text-white">Connecting to wallet...</p>
        </CardContent>
      </Card>

      <div class="mt-8 text-center">
        <p class="text-gray-400 text-sm">
          By connecting your wallet, you agree to our Terms of Service and
          Privacy Policy
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Wallet, Shield, ArrowLeft } from "lucide-vue-next";
import { Card, CardContent } from "@/components/ui/card";

const isConnecting = ref(false);
const router = useRouter();

import { connectWallet } from "@/lib/walletConnect";
import { useUserStore } from "@/stores/user";
import { getAccount } from "@/lib/getAccount";

const userStore = useUserStore();

const handleConnect = async (walletType) => {
  try {
    const { provider, signer, address, balance } = await connectWallet(
      walletType
    );
    userStore.provider = provider;
    userStore.walletAddress = address;
    userStore.balance = balance;
    userStore.isConnected = true;
    userStore.signer = signer;
    const account = await getAccount(address);

    if (account === "Not Found") {
      router.push({ name: "CreateAccount" });
    } else {
      userStore.name = account.name;
      userStore.username = account.username;
      router.push({ name: "ConsumerDashboard" });
    }
  } catch (err) {
    alert(err.message || "Failed to connect wallet");
    console.error(err);
  }
};
</script>
