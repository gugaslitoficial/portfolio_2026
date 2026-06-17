export function ProjectsSkeleton() {
  return (
    <section
      className="relative border-t border-border-subtle"
      style={{ padding: 'clamp(72px, 11vh, 128px) 0' }}
    >
      <div
        className="[max-width:1140px] mx-auto"
        style={{ padding: '0 clamp(20px, 5vw, 40px)' }}
      >
        <div className="h-4 w-24 rounded bg-surface animate-pulse mb-[18px]" />
        <div className="h-10 w-64 rounded bg-surface animate-pulse mb-4" />
        <div className="h-4 w-48 rounded bg-surface animate-pulse mb-[38px]" />
        <div
          className="grid gap-[22px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[18px] bg-surface animate-pulse"
              style={{ minHeight: '400px' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
