<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
    
    <!-- Animated icon -->
    <div class="relative mb-8">
      <Ghost :size="100" class="text-indigo-300 animate-bounce" />
      <div class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black px-2 py-1 rounded-full">
        OOPS!
      </div>
    </div>

    <h1 class="text-8xl font-black text-gray-900 mb-2">404</h1>
    
    <p class="text-2xl font-bold text-indigo-600 mb-3">
      Looks like this page ghosted you 👻
    </p>
    
    <p class="text-gray-600 mb-2 max-w-sm">
      You wandered into the void. There's nothing here but echoes and broken dreams.
    </p>

    <p class="text-gray-500 text-sm mb-10 italic">
      (and maybe a ghost or two)
    </p>

    <div class="flex items-center gap-4">
      <button
        @click="router.back()"
        class="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition"
      >
        <ChevronLeft :size="16" />
        Escape
      </button>
      <RouterLink
        to="/"
        class="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        <Home :size="16" />
        Take me home
      </RouterLink>
    </div>

    <!-- Fun footer text -->
    <p class="mt-12 text-xs text-gray-500">
      Error 404 · Page not found · Gone · Vanished · Poof 💨
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import { Ghost, ChevronLeft, Home } from 'lucide-vue-next'

const router = useRouter()
</script>