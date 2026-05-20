<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />

    <main class="max-w-3xl mx-auto px-6 py-12">
      <!-- Back buttons -->
      <div class="flex items-center gap-4 mb-8">
        <button
          @click="router.back()"
          class="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition font-semibold"
        >
          ← Go Back
        </button>
        <span class="text-gray-300">|</span>
        <RouterLink to="/" class="text-sm text-gray-500 hover:text-indigo-600 transition font-semibold">
          🏠 Home
        </RouterLink>
      </div>

      <!-- Error Boundary -->
      <ErrorBoundary>
        <!-- Suspense with loading skeleton -->
        <Suspense>
          <template #default>
            <PostDetail :post-id="postId" />
          </template>
          <template #fallback>
            <div class="bg-white border border-gray-200 rounded-2xl p-10 animate-pulse space-y-6">
              <div class="h-8 bg-gray-200 rounded w-3/4" />
              <div class="space-y-3">
                <div class="h-4 bg-gray-200 rounded w-full" />
                <div class="h-4 bg-gray-200 rounded w-5/6" />
                <div class="h-4 bg-gray-200 rounded w-4/6" />
                <div class="h-4 bg-gray-200 rounded w-full" />
                <div class="h-4 bg-gray-200 rounded w-3/4" />
              </div>
            </div>
          </template>
        </Suspense>
      </ErrorBoundary>
    </main>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import ErrorBoundary from '../components/ErrorBoundary.vue'

// Lazy load PostDetail
const PostDetail = defineAsyncComponent(() => import('../components/PostDetail.vue'))

const route = useRoute()
const router = useRouter()
const postId = computed(() => route.params.id as string)
</script>
