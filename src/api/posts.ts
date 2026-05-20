import axios from 'axios'
import type { Post, PostsResponse } from '../types'

const api = axios.create({
  baseURL: 'https://api.oluwasetemi.dev',
})

export const getPosts = async (): Promise<Post[]> => {
  const res = await api.get<PostsResponse>('/posts?limit=20')
  // handle both array and { data: [] } response shapes
  return Array.isArray(res.data) ? res.data : res.data.data ?? []
}

export const getPostById = async (id: string | number): Promise<Post> => {
  const res = await api.get<{ data: Post } | Post>(`/posts/${id}`)
  // handle both shapes
  const d = res.data as { data?: Post } & Post
  return d.data ?? (d as Post)
}
