<template>
  <slot v-if="!hasError" />
  <div v-else class="min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-red-50 border border-red-200 rounded-2xl">
    <div class="text-5xl mb-4">⚠️</div>
    <h2 class="text-xl font-bold text-red-700 mb-2">Something went wrong</h2>
    <p class="text-red-500 text-sm mb-6">An unexpected error occurred. Please try again.</p>
    <button
      @click="reset"
      class="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition"
    >
      Try Again
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)

onErrorCaptured((err) => {
  console.error('ErrorBoundary caught:', err)
  hasError.value = true
  return false
})

const reset = () => {
  hasError.value = false
}
</script>
