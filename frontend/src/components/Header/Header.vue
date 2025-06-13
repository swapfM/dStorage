<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { File, Settings, LogOut } from "lucide-vue-next";
</script>

<template>
  <header
    class="backdrop-blur-sm bg-white/5 border-b border-white/10 p-6 flex justify-between items-center w-full"
  >
    <div class="flex items-center space-x-4">
      <div
        class="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center"
      >
        <File class="w-5 h-5 text-white" />
      </div>
      <div>
        <h1 class="text-2xl font-bold text-white">Client Dashboard</h1>
        <p class="text-gray-300">Manage your files and storage</p>
      </div>
    </div>
    <div class="flex space-x-4">
      <Button
        variant="outline"
        class="border cursor-pointer border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white flex items-center"
      >
        <Settings class="w-4 h-4 mr-2" />Settings
      </Button>
      <Button
        variant="outline"
        class="border cursor-pointer border-red-400 text-red-400 hover:bg-red-400 hover:text-white flex items-center"
      >
        <LogOut class="w-4 h-4 mr-2" />Disconnect
      </Button>
    </div>
  </header>
</template>
