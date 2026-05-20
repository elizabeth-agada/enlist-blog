<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
    <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2 text-xl font-black text-indigo-600 tracking-tight">
        <PenLine :size="22" />
        Blog_Enlist
      </RouterLink>
      <RouterLink to="/" class="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-indigo-600 transition">
        <Home :size="16" />
        Home
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { PenLine, Home } from 'lucide-vue-next'
</script>