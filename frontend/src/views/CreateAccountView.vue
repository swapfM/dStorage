<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6"
  >
    <div class="w-full max-w-lg">
      <div class="text-center mb-8">
        <RouterLink
          to="/connect"
          class="inline-flex items-center text-gray-300 hover:text-white mb-6"
        >
          <ArrowLeft class="w-4 h-4 mr-2" />
          Back
        </RouterLink>
        <div
          class="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <User class="w-8 h-8 text-white" />
        </div>
        <h1 class="text-3xl font-bold text-white mb-2">Create Your Account</h1>
        <p class="text-gray-300">Set up your DeStore profile</p>
      </div>

      <div class="mb-8">
        <Progress :model-value="progress" class="h-2" />
        <div class="flex justify-between mt-2 text-sm text-gray-400">
          <span :class="{ 'text-blue-400': step >= 1 }">Basic Info</span>
          <span :class="{ 'text-blue-400': step >= 2 }">Account Type</span>
          <span :class="{ 'text-blue-400': step >= 3 }">Configuration</span>
        </div>
      </div>

      <Card class="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle class="text-white">
            {{ stepTitle }}
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <template v-if="step === 1">
            <div class="space-y-2">
              <Label for="name" class="text-gray-300">Full Name</Label>
              <Input
                id="name"
                v-model="formData.name"
                class="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="Enter your full name"
              />
            </div>
            <div class="space-y-2">
              <Label for="username" class="text-gray-300">Username</Label>
              <div class="relative">
                <Input
                  id="username"
                  v-model="formData.username"
                  class="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                  placeholder="Choose a username"
                />
                <Check
                  v-if="usernameAvailable === true"
                  class="absolute right-3 top-3 w-4 h-4 text-green-400"
                />
                <div
                  v-if="usernameAvailable === false"
                  class="absolute right-3 top-3 w-4 h-4 bg-red-400 rounded-full"
                />
              </div>
              <p
                v-if="usernameAvailable === false"
                class="text-red-400 text-sm"
              >
                Username not available
              </p>
              <p
                v-if="usernameAvailable === true"
                class="text-green-400 text-sm"
              >
                Username available!
              </p>
            </div>
          </template>

          <template v-if="step === 2">
            <div class="space-y-4">
              <Label class="text-gray-300"
                >What type of account do you need?</Label
              >
              <RadioGroup v-model="formData.accountType" class="space-y-4">
                <Card
                  class="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CardContent class="p-4">
                    <div class="flex items-center space-x-3">
                      <RadioGroupItem value="consumer" id="client" />
                      <div class="flex-1">
                        <Label
                          for="client"
                          class="text-white font-medium cursor-pointer"
                          >Client Account</Label
                        >
                        <p class="text-gray-300 text-sm">
                          I need storage space for my files
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  class="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CardContent class="p-4">
                    <div class="flex items-center space-x-3">
                      <RadioGroupItem value="provider" id="provider" />
                      <div class="flex-1">
                        <Label
                          for="provider"
                          class="text-white font-medium cursor-pointer"
                          >Provider Account</Label
                        >
                        <p class="text-gray-300 text-sm">
                          I want to offer storage space and earn rewards
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </RadioGroup>
            </div>
          </template>

          <template v-if="step === 3">
            <template v-if="formData.accountType === 'provider'">
              <div class="space-y-2">
                <Label class="text-gray-300">Maximum Storage Capacity</Label>
                <div class="flex space-x-2">
                  <Input
                    v-model="formData.maxStorage"
                    type="number"
                    class="bg-white/10 border-white/20 text-white placeholder:text-gray-400 flex-1"
                    placeholder="Enter amount"
                  />
                  <Select v-model="formData.storageUnit">
                    <SelectTrigger
                      class="w-20 bg-white/10 border-white/20 text-white"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GB">GB</SelectItem>
                      <SelectItem value="TB">TB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div class="space-y-2">
                <Label for="location" class="text-gray-300"
                  >Storage Location (Optional)</Label
                >
                <Input
                  id="location"
                  v-model="formData.storageLocation"
                  class="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="e.g., United States, Europe"
                />
              </div>
            </template>
            <template v-else>
              <div class="text-center py-8">
                <Shield class="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 class="text-xl font-semibold text-white mb-2">
                  You're all set!
                </h3>
                <p class="text-gray-300">
                  Your client account is ready to be created.
                </p>
              </div>
            </template>
          </template>

          <div class="flex justify-between pt-6">
            <Button
              v-if="step > 1"
              variant="outline"
              @click="step--"
              class="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              v-if="step < 3"
              :disabled="isNextDisabled"
              @click="step++"
              class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 ml-auto"
            >
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </Button>
            <Button
              v-else
              :disabled="
                formData.accountType === 'provider' && !formData.maxStorage
              "
              @click="handleSubmit"
              class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 ml-auto"
            >
              Create Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check, User, Shield } from "lucide-vue-next";
import { createNewAccount } from "@/lib/createAccount";
import checkUsernameAvailable from "@/lib/usernameAvailable";
import { useUserStore } from "@/stores/user";
import { debounce } from "lodash";

const router = useRouter();
const userStore = useUserStore();
const step = ref(1);
const formData = ref({
  name: "",
  username: "",
  accountType: "",
  maxStorage: "",
  storageUnit: "GB",
  storageLocation: "",
  address: userStore.walletAddress,
});
const usernameAvailable = ref<boolean | null>(null);

const checkUsernameAvailability = async (username: string) => {
  console.log("Checking availability for:", username);
  const isAvailable = await checkUsernameAvailable(username);
  usernameAvailable.value = !isAvailable;
};

watch(
  () => formData.value.username,
  debounce((username: string) => {
    if (username.trim()) {
      checkUsernameAvailability(username.trim());
    } else {
      usernameAvailable.value = null;
    }
  }, 500)
);

const handleSubmit = async () => {
  const response = await createNewAccount(formData.value);
  console.log(userStore);
};

const progress = computed(() => (step.value / 3) * 100);
const isNextDisabled = computed(() => {
  if (step.value === 1)
    return (
      !formData.value.name ||
      !formData.value.username ||
      usernameAvailable.value !== true
    );
  if (step.value === 2) return !formData.value.accountType;
  return false;
});

const stepTitle = computed(() => {
  switch (step.value) {
    case 1:
      return "Basic Information";
    case 2:
      return "Account Type";
    case 3:
      return "Configuration";
    default:
      return "";
  }
});
</script>
