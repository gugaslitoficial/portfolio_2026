import { Badge } from '@/components/ui/Badge'
import { CardShell } from '../CardShell'

interface FeaturedCardProps {
  title: string
  desc: string
  tags: string[]
  repoLabel: string
  demoLabel: string
}

export function FeaturedCard({ title, desc, tags, repoLabel, demoLabel }: FeaturedCardProps) {
  return (
    <CardShell
      background={
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
      }
    >
      <h3 className="font-display font-semibold text-[22px] text-white tracking-[-0.01em] mb-2.5">
        {title}
      </h3>
      <p className="text-[14.5px] leading-[1.6] text-medium text-pretty mb-[18px]" style={{ maxWidth: '46ch' }}>
        {desc}
      </p>
      <div className="flex flex-wrap gap-[7px] mb-5">
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
    </CardShell>
  )
}
