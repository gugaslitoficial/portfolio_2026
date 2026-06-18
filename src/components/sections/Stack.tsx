import { getTranslations, getLocale } from 'next-intl/server'
import { stack } from '@/content/data/stack'
import { SectionHeader } from '@/components/ui/SectionHeader'

export async function Stack() {
  const t = await getTranslations('stack')
  const locale = await getLocale()

  return (
    <section id="stack" className="relative border-t border-border-subtle" style={{ padding: 'clamp(72px, 11vh, 128px) 0' }} >
      <div className="max-w-285 mx-auto reveal-on-scroll" style={{ padding: '0 clamp(20px, 5vw, 40px)' }} >
        <SectionHeader
          label={t('label')}
          heading={t('heading')}
          headingClass="mb-[46px]"
          headingStyle={{ fontSize: 'clamp(28px, 4.2vw, 44px)' }}
        />

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(258px, 1fr))' }} >
          {stack.map((cat) => (
            <div
              key={cat.labelEn}
              className="border border-border rounded-[15px] bg-surface transition-all duration-300 hover:border-border-light hover:bg-[#101115] p-5.5"
            >
              <p className="font-mono text-[12px] text-accent uppercase tracking-[0.06em] mb-4">
                {locale === 'pt' ? cat.labelPt : cat.labelEn}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="text-[13.5px] text-medium bg-[#16171b] border border-[#222329] py-1.5 px-2.75 rounded-[7px]" >
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