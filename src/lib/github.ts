import type { Project } from '@/types/project'
import { projectCovers } from '@/content/data/projectCovers'

const GITHUB_USERNAME = 'gugaslitoficial'

export async function getGitHubRepos(): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=public`,
      { cache: 'no-store', headers: { Accept: 'application/vnd.github+json' } },
    )
    if (!res.ok) return []
    const data = await res.json()
    return (data as GitHubRepo[])
      .filter((r) => !r.fork && !r.archived)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        homepage: r.homepage || null,
        stars: r.stargazers_count,
        topics: r.topics ?? [],
        image: projectCovers[r.name] ?? null,
      }))
  } catch {
    return []
  }
}

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  topics: string[]
  fork: boolean
  archived: boolean
}