'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useTransition } from 'react'
import type { Locale } from '@/i18n/config'

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchTo = (next: Locale) => {
    startTransition(() => { router.replace(pathname, { locale: next }) })
  }

  return (
    <div className="flex items-center border border-border-light rounded-[9px] bg-surface p-0.5">
      <button
        type="button"
        onClick={() => switchTo('pt')}
        disabled={isPending}
        aria-pressed={locale === 'pt'}
        className={[
          'font-mono text-[12px] rounded-[7px] border-none cursor-pointer transition-all duration-200 px-2.75 py-1.25',
          locale === 'pt'
            ? 'bg-border text-foreground'
            : 'bg-transparent text-dim hover:text-muted',
        ].join(' ')}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => switchTo('en')}
        disabled={isPending}
        aria-pressed={locale === 'en'}
        className={[
          'font-mono text-[12px] rounded-[7px] border-none cursor-pointer transition-all duration-200 px-2.75 py-1.25',
          locale === 'en'
            ? 'bg-border text-foreground'
            : 'bg-transparent text-dim hover:text-muted',
        ].join(' ')}
      >
        EN
      </button>
    </div>
  )
}