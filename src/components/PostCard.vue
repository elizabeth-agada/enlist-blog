<template>
  <RouterLink
    :to="`/post/${post.id}`"
    class="group block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-300"
  >
    <div class="flex items-start gap-4">
      <span class="shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
        {{ index + 1 }}
      </span>
      <div class="flex-1 min-w-0">
        <h2 class="text-base font-bold text-gray-900 capitalize group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
          {{ post.title }}
        </h2>
        <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {{ post.body }}
        </p>
        <div class="mt-4 flex items-center justify-between">
          <span class="flex items-center gap-1 text-xs text-gray-400">
            <FileText :size="13" />
            Blog Post
          </span>
          <span class="flex items-center gap-1 text-xs font-semibold text-indigo-500 group-hover:underline">
            Read more <ArrowRight :size="13" />
          </span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FileText, ArrowRight } from 'lucide-vue-next'
import type { Post } from '../types'

defineProps<{ post: Post; index: number }>()
</script>