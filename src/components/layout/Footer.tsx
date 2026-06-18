import { getTranslations } from 'next-intl/server'

export async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="border-t border-border-subtle py-7.5">
      <div className="max-w-285 mx-auto flex justify-between items-center flex-wrap gap-3.5" style={{ padding: '0 clamp(20px, 5vw, 40px)' }} >
        <p className="font-mono text-[12.5px] text-dim">© 2026 Gustavo Romão</p>
        <p className="font-mono text-[12.5px] text-[#4a4c55]">{t('note')}</p>
        <a href="#top" className="font-mono text-[12.5px] text-dim transition-colors duration-200 hover:text-accent" >
          ↑ {t('backTop')}
        </a>
      </div>
    </footer>
  )
}