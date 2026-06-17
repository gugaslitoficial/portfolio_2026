import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label: string
  heading: string
  labelClass?: string
  headingClass?: string
  headingStyle?: React.CSSProperties
}

export function SectionHeader({
  label,
  heading,
  labelClass,
  headingClass,
  headingStyle,
}: SectionHeaderProps) {
  return (
    <>
      <p className={cn('font-mono text-[13px] tracking-[0.04em] text-accent mb-[18px]', labelClass)}>
        {label}
      </p>
      <h2
        className={cn(
          'font-display font-semibold leading-[1.04] tracking-[-0.02em] text-foreground',
          headingClass,
        )}
        style={headingStyle}
      >
        {heading}
      </h2>
    </>
  )
}
