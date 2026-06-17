export interface Project {
  name: string
  description: string | null
  url: string
  stars: number
  topics: string[]
  image?: string | null
  isTemplate?: boolean
}
