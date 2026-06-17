import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[11.5px] text-muted border border-border-light bg-white/2.5 py-1 px-[9px] rounded-md',
        className,
      )}
    >
      {children}
    </span>
  )
}
