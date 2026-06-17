import { getTranslations, getLocale } from 'next-intl/server'
import { getExperiences } from '@/content/data/experience'
import { SectionHeader } from '@/components/ui/SectionHeader'

export async function Experience() {
  const t = await getTranslations('experience')
  const locale = await getLocale()
  const items = getExperiences(locale)

  return (
    <section
      id="experiencia"
      className="relative border-t border-border-subtle"
      style={{ padding: 'clamp(72px, 11vh, 128px) 0' }}
    >
      <div
        className="[max-width:1140px] mx-auto reveal-on-scroll"
        style={{ padding: '0 clamp(20px, 5vw, 40px)' }}
      >
        <SectionHeader
          label={t('label')}
          heading={t('heading')}
          headingClass="mb-[46px]"
          headingStyle={{ fontSize: 'clamp(28px, 4.2vw, 44px)' }}
        />

        <div>
          {items.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-[minmax(0,150px)_1fr] gap-[12px] sm:gap-[clamp(16px,4vw,48px)] border-t border-border items-start py-[26px]"
            >
              <div className="font-mono text-[13px] text-dim pt-1">{exp.period}</div>
              <div>
                <h3 className="font-display font-semibold text-[20px] text-foreground tracking-[-0.01em] mb-[5px]">
                  {exp.role}
                </h3>
                <p className="font-mono text-[13.5px] text-accent mb-3">{exp.company}</p>
                <p
                  className="text-[15px] leading-[1.65] text-muted text-pretty"
                  style={{ maxWidth: '58ch' }}
                >
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
