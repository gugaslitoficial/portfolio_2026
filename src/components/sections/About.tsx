import { getTranslations } from 'next-intl/server'
import { SectionHeader } from '@/components/ui/SectionHeader'

export async function About() {
  const t = await getTranslations('about')

  return (
    <section
      id="sobre"
      className="relative"
      style={{ padding: 'clamp(72px, 11vh, 128px) 0' }}
    >
      <div
        className="[max-width:1140px] mx-auto reveal-on-scroll"
        style={{ padding: '0 clamp(20px, 5vw, 40px)' }}
      >
        <div className="grid gap-[clamp(28px,5vw,64px)] items-start" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}>
          {/* Heading */}
          <SectionHeader
            label={t('label')}
            heading={t('heading')}
            labelClass="mb-[22px]"
            headingClass="leading-[1.06] tracking-[-0.02em] text-balance"
            headingStyle={{ fontSize: 'clamp(28px, 4vw, 42px)', maxWidth: '16ch' }}
          />

          {/* Text + metadata */}
          <div>
            <p
              className="text-muted leading-[1.75] text-pretty mb-[18px]"
              style={{ fontSize: 'clamp(15px, 1.6vw, 17px)' }}
            >
              {t('p1')}
            </p>
            <p
              className="text-muted leading-[1.75] text-pretty mb-[30px]"
              style={{ fontSize: 'clamp(15px, 1.6vw, 17px)' }}
            >
              {t('p2')}
            </p>

            <div className="flex flex-col gap-5 border-t border-border pt-[26px]">
              <div>
                <p className="font-mono text-[12px] text-dim uppercase tracking-[0.08em] mb-[7px]">
                  {t('eduLabel')}
                </p>
                <p className="text-[14.5px] text-medium leading-[1.6]">{t('edu')}</p>
              </div>
              <div>
                <p className="font-mono text-[12px] text-dim uppercase tracking-[0.08em] mb-[7px]">
                  {t('langLabel')}
                </p>
                <p className="text-[14.5px] text-medium leading-[1.6]">{t('lang')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
