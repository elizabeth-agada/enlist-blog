<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />

    <main class="max-w-4xl mx-auto px-6 py-12">
      <!-- Hero -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Latest <span class="text-indigo-600">Posts</span>
        </h1>
        <p class="text-gray-500 text-lg">Explore our collection of articles and stories.</p>
      </div>

      <!-- Error Boundary wraps the async content -->
      <ErrorBoundary>
        <!-- Suspense handles lazy loading -->
        <Suspense>
          <template #default>
            <PostList />
          </template>
          <template #fallback>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="n in 6"
                :key="n"
                class="bg-white border border-gray-200 rounded-2xl p-6 animate-pulse"
              >
                <div class="flex gap-4">
                  <div class="w-10 h-10 rounded-full bg-gray-200" />
                  <div class="flex-1 space-y-3">
                    <div class="h-4 bg-gray-200 rounded w-3/4" />
                    <div class="h-3 bg-gray-200 rounded w-full" />
                    <div class="h-3 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Suspense>
      </ErrorBoundary>
    </main>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Navbar from '../components/Navbar.vue'
import ErrorBoundary from '../components/ErrorBoundary.vue'

// Lazy load PostList component
const PostList = defineAsyncComponent(() => import('../components/PostList.vue'))
</script>
