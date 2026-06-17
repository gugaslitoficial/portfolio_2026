import { getTranslations } from 'next-intl/server'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

export async function Navbar() {
  const t = await getTranslations('nav')

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[#16171b]"
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: 'rgba(10,10,12,0.72)',
      }}
    >
      <div
        className="[max-width:1140px] mx-auto flex items-center justify-between gap-4"
        style={{ padding: '0 clamp(20px, 5vw, 40px)', height: '64px' }}
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display font-semibold text-[16px] tracking-[-0.01em] text-white"
        >
          <span
            className="rounded-full bg-accent"
            style={{ width: '9px', height: '9px', boxShadow: '0 0 12px rgba(91,140,255,0.85)' }}
          />
          Gustavo Romão
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-3 sm:gap-[clamp(10px,2vw,26px)]">
          <a
            href="#sobre"
            className="hidden sm:block text-[14px] text-muted transition-colors duration-200 hover:text-foreground"
          >
            {t('sobre')}
          </a>
          <a
            href="#projetos"
            className="hidden sm:block text-[14px] text-muted transition-colors duration-200 hover:text-foreground"
          >
            {t('projetos')}
          </a>
          <a
            href="#experiencia"
            className="hidden sm:block text-[14px] text-muted transition-colors duration-200 hover:text-foreground"
          >
            {t('exp')}
          </a>

          <LanguageSwitcher />

          <a
            href="#contato"
            className="text-[14px] font-medium text-[#06070a] bg-foreground px-4 py-2 rounded-[9px] transition-all duration-200 hover:bg-white hover:-translate-y-px"
          >
            {t('contato')}
          </a>
        </div>
      </div>
    </nav>
  )
}
