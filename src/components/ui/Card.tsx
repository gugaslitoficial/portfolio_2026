import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'border border-[#1f2025] rounded-[18px] bg-surface transition-all duration-300 hover:border-[#2e2f36] hover:-translate-y-0.75',
        className,
      )}
    >
      {children}
    </div>
  )
}
