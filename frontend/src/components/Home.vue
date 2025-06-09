<script>
import { Shield } from "lucide-vue-next";
</script>

<template>
  <div
    className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
  >
    <nav
      className="flex items-center justify-between p-6 backdrop-blur-sm bg-white/5 border-b border-white/10"
    >
      <div className="flex items-center space-x-2">
        <div
          className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center"
        >
          <Shield className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white">DeStore</span>
      </div>
    </nav>
  </div>
</template>
