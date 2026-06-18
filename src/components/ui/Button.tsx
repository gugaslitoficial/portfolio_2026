import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', className, style, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold text-[15px] rounded-[11px] transition-all duration-200 cursor-pointer border-none px-5.5 py-3.25',
        variant === 'primary' &&
          'bg-accent text-[#06070a] hover:bg-[#80a4ff] hover:-translate-y-0.5 hover:shadow-[0_12px_34px_-12px_rgba(91,140,255,0.65)]',
        variant === 'secondary' &&
          'bg-transparent border border-border-light text-foreground hover:border-[#3a3b42] hover:bg-[#101013]',
        className,
      )}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}