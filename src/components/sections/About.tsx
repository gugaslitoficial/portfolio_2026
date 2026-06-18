import { getTranslations } from 'next-intl/server'

export async function About() {
  const t = await getTranslations('about')

  return (
    <section id="sobre" className="relative" style={{ padding: 'clamp(72px, 11vh, 128px) 0' }} >
      <div className="max-w-285 mx-auto reveal-on-scroll" style={{ padding: '0 clamp(20px, 5vw, 40px)' }} >
        <p className="font-mono text-[13px] tracking-[0.04em] text-accent mb-[22px]">
          {t('label')}
        </p>

        <div className="grid gap-[clamp(28px,5vw,64px)] items-start" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}>
          {/* Coluna esquerda — título */}
          <h2
            className="font-display font-semibold leading-[1.06] tracking-[-0.02em] text-foreground text-balance"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)', maxWidth: '16ch' }}
          >
            {t('heading')}
          </h2>

          {/* Coluna direita — parágrafos + metadados */}
          <div>
            <p className="text-muted leading-[1.75] text-pretty mb-4.5" style={{ fontSize: 'clamp(15px, 1.6vw, 17px)' }}>
              {t('p1')}
            </p>
            <p className="text-muted leading-[1.75] text-pretty mb-7.5" style={{ fontSize: 'clamp(15px, 1.6vw, 17px)' }}>
              {t('p2')}
            </p>
            <div className="flex flex-col gap-5 border-t border-border pt-6.5">
              <div>
                <p className="font-mono text-[12px] text-dim uppercase tracking-[0.08em] mb-1.75">
                  {t('eduLabel')}
                </p>
                <p className="text-[14.5px] text-medium leading-[1.6]">{t('edu')}</p>
              </div>
              <div>
                <p className="font-mono text-[12px] text-dim uppercase tracking-[0.08em] mb-1.75">
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