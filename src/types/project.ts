export interface Project {
  name: string
  description: string | null
  url: string
  homepage?: string | null
  stars: number
  topics: string[]
  image?: string | null
}