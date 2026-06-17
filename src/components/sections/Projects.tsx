import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { getGitHubRepos } from '@/lib/github'
import { Badge } from '@/components/ui/Badge'
import type { Project } from '@/types/project'

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
        <p className="font-mono text-[13px] tracking-[0.04em] text-accent mb-[18px]">
          {t('label')}
        </p>
        <h2
          className="font-display font-semibold leading-[1.04] tracking-[-0.02em] text-foreground mb-4"
          style={{ fontSize: 'clamp(28px, 4.2vw, 44px)' }}
        >
          {t('heading')}
        </h2>
        <p
          className="font-mono text-[13px] text-dim inline-flex items-center leading-normal mb-[38px] gap-[9px]"
        >
          <span className="flex-none rounded-full bg-accent" style={{ width: '6px', height: '6px' }} />
          {t('note')}
        </p>

        <div
          className="grid gap-[22px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          {/* Featured static card */}
          <FeaturedCard
            title={t('featuredTitle')}
            desc={t('featuredDesc')}
            tags={featuredTags}
            repoLabel={t('repo')}
            demoLabel={t('demo')}
          />

          {/* GitHub repo cards */}
          {repos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} starsLabel={t('stars')} />
          ))}

          {/* Ghost card — always last */}
          <GhostCard title={t('ghostTitle')} desc={t('ghostDesc')} />
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({
  title,
  desc,
  tags,
  repoLabel,
  demoLabel,
}: {
  title: string
  desc: string
  tags: string[]
  repoLabel: string
  demoLabel: string
}) {
  return (
    <article
      className="relative border border-[#1f2025] rounded-[18px] overflow-hidden flex flex-col justify-end bg-surface transition-all duration-300 hover:border-[#2e2f36] hover:-translate-y-0.75 group"
      style={{ minHeight: '400px' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 transition-[transform,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:brightness-[1.12]"
        style={{
          backgroundColor: '#0d0e12',
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(91,140,255,0.06) 0px, rgba(91,140,255,0.06) 1px, transparent 1px, transparent 12px)',
        }}
      >
        <span
          className="absolute font-mono text-[11.5px] text-[#62646d] tracking-[0.04em] border border-border-light bg-background rounded-md px-[11px] py-[5px]"
          style={{ top: '18px', left: '18px' }}
        >
          in/progress
        </span>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 [z-index:1]"
        style={{
          background:
            'linear-gradient(to top, rgba(10,10,12,0.97) 6%, rgba(10,10,12,0.72) 42%, rgba(10,10,12,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative [z-index:2] p-[26px]">
        <h3 className="font-display font-semibold text-[22px] text-white tracking-[-0.01em] mb-2.5">
          {title}
        </h3>
        <p className="text-[14.5px] leading-[1.6] text-medium text-pretty mb-[18px]" style={{ maxWidth: '46ch' }}>
          {desc}
        </p>
        <div className="flex flex-wrap" style={{ gap: '7px', marginBottom: '20px' }}>
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <a
            href="https://github.com/gugaslitoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] font-medium text-muted transition-colors duration-300 hover:text-accent group-hover:text-accent"
          >
            {repoLabel} ↗
          </a>
          <span className="font-mono text-[13px] font-medium text-dim cursor-not-allowed">
            {demoLabel} —
          </span>
        </div>
      </div>
    </article>
  )
}

function RepoCard({ repo, starsLabel }: { repo: Project; starsLabel: string }) {
  return (
    <article
      className="relative border border-[#1f2025] rounded-[18px] overflow-hidden flex flex-col justify-end bg-surface transition-all duration-300 hover:border-[#2e2f36] hover:-translate-y-0.75 group"
      style={{ minHeight: '400px' }}
    >
      {repo.image ? (
        <div className="absolute inset-0 z-0 overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]">
          <Image
            src={repo.image}
            alt={repo.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0 transition-[transform,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:brightness-[1.12]"
          style={{
            backgroundColor: '#0d0e12',
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(91,140,255,0.04) 0px, rgba(91,140,255,0.04) 1px, transparent 1px, transparent 14px)',
          }}
        />
      )}
      <div
        className="absolute inset-0 [z-index:1]"
        style={{
          background:
            'linear-gradient(to top, rgba(10,10,12,0.97) 6%, rgba(10,10,12,0.72) 42%, rgba(10,10,12,0.2) 100%)',
        }}
      />
      <div className="relative [z-index:2] p-[26px]">
        <h3 className="font-display font-semibold text-[20px] text-white tracking-[-0.01em] mb-2.5">
          {repo.name}
        </h3>
        {repo.description && (
          <p className="text-[14.5px] leading-[1.6] text-medium text-pretty mb-[18px]" style={{ maxWidth: '46ch' }}>
            {repo.description}
          </p>
        )}
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-[7px] mb-5">
            {repo.topics.slice(0, 5).map((topic) => (
              <Badge key={topic}>{topic}</Badge>
            ))}
          </div>
        )}
        <div className="flex gap-5 items-center">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] font-medium text-muted transition-colors duration-300 hover:text-accent group-hover:text-accent"
          >
            GitHub ↗
          </a>
          {repo.stars > 0 && (
            <span className="font-mono text-[12px] text-dim">
              ★ {repo.stars} {starsLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

function GhostCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article
      className="border border-dashed border-[#2a2b31] rounded-[18px] flex flex-col items-center justify-center text-center gap-4 transition-colors duration-300 hover:border-[#3a3b42] p-8"
      style={{
        minHeight: '400px',
        background:
          'radial-gradient(120% 80% at 50% 0%, rgba(91,140,255,0.04), transparent 60%)',
      }}
    >
      <div
        className="rounded-[15px] border border-border-light bg-surface flex items-center justify-center font-mono text-accent text-xl font-medium"
        style={{ width: '54px', height: '54px' }}
      >
        {'{ }'}
      </div>
      <h3 className="font-display font-semibold text-[18px] text-foreground">{title}</h3>
      <p className="text-[13.5px] text-dim leading-[1.6]" style={{ maxWidth: '30ch' }}>
        {desc}
      </p>
    </article>
  )
}
