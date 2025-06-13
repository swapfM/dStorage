<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Switch } from "../ui/switch";
import { User, Copy, CircleIcon } from "lucide-vue-next";
import { ref, computed } from "vue";

const showName = ref(true);
const showUsername = ref(true);
const showWallet = ref(true);
const showBalance = ref(true);

const userData = {
  name: "Alice Client",
  username: "aliceclient",
  wallet: "0x9876543210fedcba9876543210fedcba98765432",
  balance: "8.75",
};

const displayName = computed(() => {
  return showName.value ? userData.name : "****";
});

const displayUsername = computed(() => {
  return showUsername.value ? userData.username : "****";
});

const displayWallet = computed(() => {
  return showWallet.value
    ? `${userData.wallet.slice(0, 6)}...${userData.wallet.slice(-4)}`
    : "****";
});

const displayBalance = computed(() => {
  return showBalance.value ? `${userData.balance} ETH` : "****";
});

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(userData.wallet);
};
</script>
<template>
  <Card class="bg-white/5 backdrop-blur-sm border-white/10">
    <CardHeader>
      <CardTitle class="text-white flex items-center font-semibold text-2xl">
        <User class="w-5 h-5 mr-2" stroke-width="3" />
        Profile Information
      </CardTitle>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <label class="text-gray-300 text-sm">Name</label>
              <p class="text-white font-medium text-lg">{{ displayName }}</p>
            </div>
            <Switch v-model="showName" />
          </div>

          <div class="flex items-center justify-between">
            <div class="flex-1">
              <label class="text-gray-300 text-sm">Username</label>

              <p class="text-white font-medium text-lg">
                {{ displayUsername }}
              </p>
            </div>
            <Switch v-model="showUsername" />
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <label class="text-gray-300 text-sm">Wallet Address</label>
              <div class="flex items-center space-x-2">
                <p class="text-white font-medium text-lg">
                  {{ displayWallet }}
                </p>

                <Button
                  size="sm"
                  variant="ghost"
                  class="text-blue-400 hover:text-white hover:bg-blue-500 p-2 hover:rounded-md cursor-pointer"
                  @click="copyToClipboard"
                  v-if="showWallet"
                >
                  <Copy class="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Switch v-model="showWallet" />
          </div>

          <div class="flex items-center justify-between">
            <div class="flex-1">
              <label class="text-gray-300 text-sm">Balance</label>
              <p class="text-white font-medium text-lg">
                {{ displayBalance }}
              </p>
            </div>
            <Switch v-model="showBalance" />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
