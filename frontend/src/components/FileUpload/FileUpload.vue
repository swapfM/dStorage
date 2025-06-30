<template>
  <Card class="bg-white/5 backdrop-blur-sm border-white/10">
    <CardHeader>
      <CardTitle class="text-white flex items-center">
        <Upload class="w-5 h-5 mr-2" />
        Upload Files
      </CardTitle>
    </CardHeader>

    <CardContent class="space-y-6">
      <div
        class="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-colors"
      >
        <Upload class="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p class="text-white font-medium mb-2">Drag and drop your files here</p>
        <p class="text-gray-300 text-sm mb-4">or click to browse</p>

        <input
          type="file"
          id="file-upload"
          multiple
          class="hidden"
          @change="handleFileUpload"
        />

        <label for="file-upload">
          <Button
            class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
          >
            Choose Files
          </Button>
        </label>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Upload } from "lucide-vue-next";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const files = ref<File[]>([]);

function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    files.value = Array.from(target.files);
    console.log("Uploaded files:", files.value);
  }
}
</script>
