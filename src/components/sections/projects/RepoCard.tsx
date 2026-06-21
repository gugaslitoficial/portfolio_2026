import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { CardShell } from '../CardShell'
import type { Project } from '@/types/project'

interface RepoCardProps {
  repo: Project
  starsLabel: string
}

function CardContent({ repo, starsLabel }: RepoCardProps) {
  return (
    <>
      <h3 className="font-display font-semibold text-[20px] text-white tracking-[-0.01em] mb-2.5">
        {repo.name}
      </h3>
      {repo.description && (
        <p className="text-[14.5px] leading-[1.6] text-medium text-pretty mb-4.5" style={{ maxWidth: '46ch' }}>
          {repo.description}
        </p>
      )}
      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.75 mb-5">
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
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] font-medium text-accent transition-colors duration-300 hover:text-foreground"
          >
            Ver projeto ↗
          </a>
        )}
        {repo.stars > 0 && (
          <span className="font-mono text-[12px] text-dim">
            ★ {repo.stars} {starsLabel}
          </span>
        )}
      </div>
    </>
  )
}

export function RepoCard({ repo, starsLabel }: RepoCardProps) {
  if (repo.image) {
    return (
      <article
        className="border border-[#1f2025] rounded-[18px] overflow-hidden flex flex-col bg-surface transition-all duration-300 hover:border-[#2e2f36] hover:-translate-y-0.75 group"
        style={{ minHeight: '400px' }}
      >
        <div className="relative flex-none overflow-hidden" style={{ height: '220px' }}>
          <Image
            src={repo.image}
            alt={repo.name}
            fill
            className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        </div>
        <div className="flex flex-col justify-end flex-grow p-6.5 bg-surface border-t border-[#1f2025]">
          <CardContent repo={repo} starsLabel={starsLabel} />
        </div>
      </article>
    )
  }

  return (
    <CardShell
      background={
        <div
          className="absolute inset-0 z-0 transition-[transform,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:brightness-[1.12]"
          style={{
            backgroundColor: '#0d0e12',
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(91,140,255,0.04) 0px, rgba(91,140,255,0.04) 1px, transparent 1px, transparent 14px)',
          }}
        />
      }
    >
      <CardContent repo={repo} starsLabel={starsLabel} />
    </CardShell>
  )
}