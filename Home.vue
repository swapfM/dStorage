<script setup lang="ts">
import { Shield, Zap, Globe, ArrowRight, Wallet } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
</script>

<template>
  <div class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <nav
      class="flex items-center justify-between p-6 backdrop-blur-sm bg-white/5 border-b border-white/10"
    >
      <div class="flex items-center space-x-2">
        <div
          class="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center"
        >
          <Shield class="w-5 h-5 text-white" />
        </div>
        <span class="text-xl font-bold text-white">DeStore</span>
      </div>
      <router-link to="/connect">
        <Button
          class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
        >
          <Wallet class="w-4 h-4 mr-2" />
          Connect Wallet
        </Button>
      </router-link>
    </nav>

    <section class="flex flex-col items-center justify-center">
      <div class="flex flex-col container mx-auto px-6 py-20 items-center">
        <div class="flex flex-col items-center max-w-4xl mx-auto">
          <span
            class="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
          >
            Decentralized Storage
          </span>
          <span
            class="bg-gradient-to-r md:text-7xl text-5xl from-blue-400 to-purple-500 bg-clip-text text-transparent block"
          >
            Reimagined
          </span>

          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect storage providers with clients in a trustless, secure, and
            efficient marketplace. Store your files with confidence on the
            decentralized web.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/connect">
              <Button
                size="lg"
                class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg"
              >
                Get Started
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </router-link>
            <Button
              size="lg"
              variant="outline"
              class="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto px-6 py-20">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4">Why Choose DeStore?</h2>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Experience the future of file storage with our decentralized platform
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <Card
          class="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <CardContent class="p-8 text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Shield class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Secure & Trustless
            </h3>
            <p class="text-gray-300">
              Your files are encrypted and distributed across multiple
              providers, ensuring maximum security without relying on
              centralized authorities.
            </p>
          </CardContent>
        </Card>

        <Card
          class="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <CardContent class="p-8 text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Zap class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Lightning Fast
            </h3>
            <p class="text-gray-300">
              Optimized routing and caching ensure your files are accessible
              quickly from anywhere in the world.
            </p>
          </CardContent>
        </Card>

        <Card
          class="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <CardContent class="p-8 text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Globe class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Global Network
            </h3>
            <p class="text-gray-300">
              Access a worldwide network of storage providers, ensuring
              redundancy and optimal performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <Card
        class="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border-white/10"
      >
        <CardContent class="p-12 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Join thousands of users already using decentralized storage
          </p>
          <router-link to="/connect">
            <Button
              size="lg"
              class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg"
            >
              <Wallet class="w-5 h-5 mr-2" />
              Connect Your Wallet
            </Button>
          </router-link>
        </CardContent>
      </Card>
    </section>
  </div>
</template>
