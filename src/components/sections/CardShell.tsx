import type { ReactNode } from 'react'

interface CardShellProps {
  background: ReactNode
  children: ReactNode
}

export function CardShell({ background, children }: CardShellProps) {
  return (
    <article
      className="relative border border-[#1f2025] rounded-[18px] overflow-hidden flex flex-col justify-end bg-surface transition-all duration-300 hover:border-[#2e2f36] hover:-translate-y-0.75 group"
      style={{ minHeight: '400px' }}
    >
      {background}
      <div
        className="absolute inset-0 [z-index:1]"
        style={{
          background:
            'linear-gradient(to top, rgba(10,10,12,0.97) 6%, rgba(10,10,12,0.72) 42%, rgba(10,10,12,0.2) 100%)',
        }}
      />
      <div className="relative [z-index:2] p-[26px]">{children}</div>
    </article>
  )
}
