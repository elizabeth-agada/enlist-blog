<template>
  <div v-if="error" class="text-center py-20">
    <p class="text-red-500 font-semibold">Failed to load post. Please go back and try again.</p>
  </div>
  <article v-else-if="post" class="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
    <!-- Badge -->
    <div class="flex items-center gap-3 mb-6">
      <span class="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold shrink-0">
        {{ post.id }}
      </span>
      <span class="text-xs text-gray-400 font-semibold uppercase tracking-widest">Post #{{ post.id }}</span>
    </div>

    <!-- Title -->
    <h1 class="text-3xl font-black text-gray-900 capitalize leading-tight mb-6">
      {{ post.title }}
    </h1>

    <!-- Divider -->
    <div class="border-t border-gray-100 my-6" />

    <!-- Body -->
    <p class="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
      {{ post.body }}
    </p>

    <!-- Footer -->
    <div class="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
      <span class="text-sm text-gray-400">Written by <span class="font-semibold text-gray-600">User #{{ post.userId }}</span></span>
      <span class="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-semibold">Blog Post</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getPostById } from '../api/posts'
import type { Post } from '../types'

const props = defineProps<{ postId: string }>()

const post = ref<Post | null>(null)
const error = ref(false)

try {
  post.value = await getPostById(props.postId)
} catch {
  error.value = true
}
</script>
