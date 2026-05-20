export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface PostsResponse {
  data: Post[]
  total?: number
}
