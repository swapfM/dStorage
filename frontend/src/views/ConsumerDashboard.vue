<script setup>
import { ref, computed } from "vue";
import {
  User,
  Wallet,
  Copy,
  Upload,
  File,
  Star,
  HardDrive,
  Settings,
  LogOut,
  Search,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header/Header.vue";
import ProfileCard from "@/components/ProfileCard/ProfileCard.vue";
import FileUpload from "@/components/FileUpload/FileUpload.vue";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserStore } from "@/stores/user";

const showName = ref(true);
const showUsername = ref(true);
const showWallet = ref(true);
const showBalance = ref(true);
const fileSize = ref("");
const searchTerm = ref("");
const sortBy = ref("reputation");

const userStore = useUserStore();

const userData = {
  name: userStore.name,
  username: userStore.username,
  wallet: userStore.walletAddress,
  balance: userStore.balance,
};

const providers = [
  {
    id: 1,
    name: "John Provider",
    username: "johnprovider",
    availableStorage: 350,
    pricePerGB: 0.01,
    reputation: 4.8,
    responseTime: "< 1 min",
    uptime: 99.9,
    location: "United States",
  },
  {
    id: 2,
    name: "Storage Master",
    username: "storagemaster",
    availableStorage: 1200,
    pricePerGB: 0.008,
    reputation: 4.9,
    responseTime: "< 30 sec",
    uptime: 99.95,
    location: "Europe",
  },
  {
    id: 3,
    name: "Crypto Storage",
    username: "cryptostorage",
    availableStorage: 800,
    pricePerGB: 0.012,
    reputation: 4.7,
    responseTime: "< 2 min",
    uptime: 99.8,
    location: "Asia",
  },
  {
    id: 4,
    name: "Decentralized Hub",
    username: "decenthub",
    availableStorage: 500,
    pricePerGB: 0.009,
    reputation: 4.6,
    responseTime: "< 1 min",
    uptime: 99.7,
    location: "Canada",
  },
];

const myFiles = [
  {
    id: 1,
    name: "project-docs.zip",
    size: "25 GB",
    provider: "johnprovider",
    status: "Active",
    uploaded: "2 days ago",
  },
  {
    id: 2,
    name: "backup-data.tar",
    size: "50 GB",
    provider: "storagemaster",
    status: "Active",
    uploaded: "1 week ago",
  },
  {
    id: 3,
    name: "media-files.zip",
    size: "100 GB",
    provider: "cryptostorage",
    status: "Syncing",
    uploaded: "3 hours ago",
  },
];

const filteredProviders = computed(() => {
  return providers
    .filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        p.username.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy.value) {
        case "reputation":
          return b.reputation - a.reputation;
        case "price":
          return a.pricePerGB - b.pricePerGB;
        case "storage":
          return b.availableStorage - a.availableStorage;
        default:
          return 0;
      }
    });
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
  >
    <Header />
    <div class="container mx-auto p-6 flex flex-col gap-4">
      <ProfileCard :user-data="userData" />
      <FileUpload />
    </div>
  </div>
</template>

<style scoped></style>
