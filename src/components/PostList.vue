<template>
  <div v-if="error" class="text-center py-20">
    <p class="text-red-500 font-semibold">Failed to load posts. Please refresh.</p>
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getPosts } from '../api/posts'
import PostCard from './PostCard.vue'
import type { Post } from '../types'

const posts = ref<Post[]>([])
const error = ref(false)

// Using await at top level works inside <Suspense>
const loadPosts = async () => {
  try {
    posts.value = await getPosts()
  } catch {
    error.value = true
  }
}

// This makes Suspense wait for posts before rendering
await loadPosts()
</script>
