<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
    <div class="text-8xl mb-6">🔍</div>
    <h1 class="text-6xl font-black text-gray-900 mb-4">404</h1>
    <p class="text-xl text-gray-500 mb-2">Page not found</p>
    <p class="text-gray-400 mb-10 max-w-sm">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <div class="flex items-center gap-4">
      <button
        @click="router.back()"
        class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition"
      >
        ← Go Back
      </button>
      <RouterLink
        to="/"
        class="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        🏠 Go Home
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
</script>
