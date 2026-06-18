export function ProjectsSkeleton() {
  return (
    <section className="relative border-t border-border-subtle" style={{ padding: 'clamp(72px, 11vh, 128px) 0' }} >
      <div className="max-w-285 mx-auto" style={{ padding: '0 clamp(20px, 5vw, 40px)' }} >
        <div className="h-4 w-24 rounded bg-surface animate-pulse mb-4.5" />
        <div className="h-10 w-64 rounded bg-surface animate-pulse mb-4" />
        <div className="h-4 w-48 rounded bg-surface animate-pulse mb-9.5" />
        <div className="grid gap-5.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }} >
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-[18px] bg-surface animate-pulse" style={{ minHeight: '400px' }} />
          ))}
        </div>
      </div>
    </section>
  )
}