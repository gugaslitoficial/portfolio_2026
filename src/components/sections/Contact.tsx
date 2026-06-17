import { getTranslations } from 'next-intl/server'
import { ContactForm } from './ContactForm'
import { SectionHeader } from '@/components/ui/SectionHeader'

export async function Contact() {
  const t = await getTranslations('contact')

  const strings = {
    formName: t('formName'),
    formEmail: t('formEmail'),
    formMsg: t('formMsg'),
    formNamePh: t('formNamePh'),
    formEmailPh: t('formEmailPh'),
    formMsgPh: t('formMsgPh'),
    formSend: t('formSend'),
    formSent: t('formSent'),
    formError: t('formError'),
  }

  return (
    <section
      id="contato"
      className="relative border-t border-border-subtle"
      style={{ padding: 'clamp(72px, 11vh, 128px) 0' }}
    >
      <div
        className="[max-width:1140px] mx-auto reveal-on-scroll-sm"
        style={{ padding: '0 clamp(20px, 5vw, 40px)' }}
      >
        <div
          className="grid gap-[clamp(32px,6vw,72px)] items-start"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* Left — info */}
          <div>
            <SectionHeader
              label={t('label')}
              heading={t('heading')}
              headingClass="text-balance mb-5"
              headingStyle={{ fontSize: 'clamp(28px, 4.2vw, 44px)', maxWidth: '14ch' }}
            />
            <p
              className="text-muted leading-[1.7] text-pretty mb-[34px]"
              style={{ fontSize: 'clamp(15px, 1.6vw, 17px)', maxWidth: '38ch' }}
            >
              {t('desc')}
            </p>

            <div className="flex flex-col gap-1.5">
              <a
                href="mailto:gustavo-romao@hotmail.com"
                className="inline-flex items-center gap-[11px] py-[11px] font-mono text-[14.5px] text-foreground border-b border-border transition-colors duration-200 hover:text-accent"
              >
                <span className="text-dim text-[12px] w-16">{t('emailLabel')}</span>
                gustavo-romao@hotmail.com
              </a>
              <a
                href="https://github.com/gugaslitoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[11px] py-[11px] font-mono text-[14.5px] text-foreground border-b border-border transition-colors duration-200 hover:text-accent"
              >
                <span className="text-dim text-[12px] w-16">GitHub</span>
                github.com/gugaslitoficial ↗
              </a>
              <a
                href="https://www.linkedin.com/in/gustavo-romao-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[11px] py-[11px] font-mono text-[14.5px] text-foreground transition-colors duration-200 hover:text-accent"
              >
                <span className="text-dim text-[12px] w-16">LinkedIn</span>
                in/gustavo-romao-dev ↗
              </a>
            </div>
          </div>

          {/* Right — form (client component) */}
          <ContactForm strings={strings} />
        </div>
      </div>
    </section>
  )
}
