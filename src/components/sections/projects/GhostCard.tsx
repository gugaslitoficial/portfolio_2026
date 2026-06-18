interface GhostCardProps {
  title: string
  desc: string
}

export function GhostCard({ title, desc }: GhostCardProps) {
  return (
    <article
      className="border border-dashed border-[#2a2b31] rounded-[18px] flex flex-col items-center justify-center text-center gap-4 transition-colors duration-300 hover:border-[#3a3b42] p-8"
      style={{ minHeight: '400px', background: 'radial-gradient(120% 80% at 50% 0%, rgba(91,140,255,0.04), transparent 60%)' }}
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