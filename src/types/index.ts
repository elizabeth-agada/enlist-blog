export interface Post {
  id: string | number
  title: string
  body: string
  content?: string
  userId?: string | number
}

export interface PostsResponse {
  data: Post[]
  total?: number
}