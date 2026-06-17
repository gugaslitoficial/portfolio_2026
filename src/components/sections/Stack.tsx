import { getTranslations, getLocale } from 'next-intl/server'
import { stack } from '@/content/data/stack'

export async function Stack() {
  const t = await getTranslations('stack')
  const locale = await getLocale()

  return (
    <section
      id="stack"
      className="relative border-t border-border-subtle"
      style={{ padding: 'clamp(72px, 11vh, 128px) 0' }}
    >
      <div
        className="[max-width:1140px] mx-auto reveal-on-scroll"
        style={{ padding: '0 clamp(20px, 5vw, 40px)' }}
      >
        <p className="font-mono text-[13px] tracking-[0.04em] text-accent mb-[18px]">
          {t('label')}
        </p>
        <h2
          className="font-display font-semibold leading-[1.04] tracking-[-0.02em] text-foreground mb-[46px]"
          style={{ fontSize: 'clamp(28px, 4.2vw, 44px)' }}
        >
          {t('heading')}
        </h2>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(258px, 1fr))' }}
        >
          {stack.map((cat) => (
            <div
              key={cat.labelEn}
              className="border border-border rounded-[15px] bg-surface transition-all duration-300 hover:border-border-light hover:bg-[#101115] p-[22px]"
            >
              <p className="font-mono text-[12px] text-accent uppercase tracking-[0.06em] mb-4">
                {locale === 'pt' ? cat.labelPt : cat.labelEn}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-[13.5px] text-medium bg-[#16171b] border border-[#222329] py-1.5 px-[11px] rounded-[7px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
