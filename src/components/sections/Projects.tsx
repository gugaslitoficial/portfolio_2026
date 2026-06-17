import { getTranslations } from 'next-intl/server'
import { getGitHubRepos } from '@/lib/github'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FeaturedCard } from './projects/FeaturedCard'
import { RepoCard } from './projects/RepoCard'
import { GhostCard } from './projects/GhostCard'

export async function Projects() {
  const t = await getTranslations('projects')
  const repos = await getGitHubRepos()
  const featuredTags = t.raw('featuredTags') as string[]

  return (
    <section
      id="projetos"
      className="relative border-t border-border-subtle"
      style={{ padding: 'clamp(72px, 11vh, 128px) 0' }}
    >
      <div
        className="[max-width:1140px] mx-auto reveal-on-scroll"
        style={{ padding: '0 clamp(20px, 5vw, 40px)' }}
      >
        <SectionHeader
          label={t('label')}
          heading={t('heading')}
          headingClass="mb-4"
          headingStyle={{ fontSize: 'clamp(28px, 4.2vw, 44px)' }}
        />
        <p className="font-mono text-[13px] text-dim inline-flex items-center leading-normal mb-[38px] gap-[9px]">
          <span className="flex-none rounded-full bg-accent" style={{ width: '6px', height: '6px' }} />
          {t('note')}
        </p>

        <div
          className="grid gap-[22px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          <FeaturedCard
            title={t('featuredTitle')}
            desc={t('featuredDesc')}
            tags={featuredTags}
            repoLabel={t('repo')}
            demoLabel={t('demo')}
          />

          {repos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} starsLabel={t('stars')} />
          ))}

          <GhostCard title={t('ghostTitle')} desc={t('ghostDesc')} />
        </div>
      </div>
    </section>
  )
}
