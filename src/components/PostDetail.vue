<template>
  <div v-if="error" class="text-center py-20">
    <AlertTriangle :size="40" class="text-red-400 mx-auto mb-4" />
    <p class="text-red-500 font-semibold">Failed to load post. Please go back and try again.</p>
  </div>
  <article v-else-if="post" class="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
    <div class="flex items-center gap-2 mb-6">
      <BookOpen :size="16" class="text-indigo-400" />
      <span class="text-xs text-gray-400 font-semibold uppercase tracking-widest">Blog Post</span>
    </div>
    <h1 class="text-3xl font-black text-gray-900 capitalize leading-tight mb-6">
      {{ post.title }}
    </h1>
    <div class="border-t border-gray-100 my-6" />
    <p class="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
      {{ post.body || post.content || 'No content available.' }}
    </p>
    <div class="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
      <span class="flex items-center gap-1 text-sm text-gray-400">
        <User :size="14" /> Blog Author
      </span>
      <span class="flex items-center gap-1 text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-semibold">
        <Tag :size="12" /> Blog Post
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AlertTriangle, BookOpen, User, Tag } from 'lucide-vue-next'
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