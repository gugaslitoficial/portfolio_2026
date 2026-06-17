import { getTranslations } from 'next-intl/server'

export async function Hero() {
  const t = await getTranslations('hero')

  return (
    <header
      id="top"
      className="relative overflow-hidden border-b border-border-subtle min-h-screen flex items-center"
    >
      {/* Animated SVG network — right side decoration */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-1/2 -translate-y-1/2 pointer-events-none z-1 opacity-85"
        style={{
          right: 'clamp(-120px, -4vw, 0px)',
          width: 'min(52vw, 580px)',
          aspectRatio: '1/1',
          WebkitMaskImage:
            'radial-gradient(circle at 62% 50%, #000 38%, transparent 76%)',
          maskImage:
            'radial-gradient(circle at 62% 50%, #000 38%, transparent 76%)',
        }}
      >
        <svg
          viewBox="0 0 400 400"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#5b8cff" strokeWidth="1.25" opacity="0.34">
            <path id="grp1" d="M60 200 C110 150 150 122 190 90" />
            <path id="grp2" d="M60 200 C110 250 150 278 190 310" />
            <path id="grp3" d="M190 90 C240 122 270 160 300 200" />
            <path id="grp4" d="M190 310 C240 278 270 240 300 200" />
            <path id="grp5" d="M300 200 C332 178 350 156 374 130" />
          </g>

          {/* Animated particles along paths */}
          <g fill="#5b8cff">
            <circle r="3">
              <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#grp1" />
              </animateMotion>
            </circle>
            <circle r="3">
              <animateMotion dur="4.6s" begin="0.8s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#grp2" />
              </animateMotion>
            </circle>
            <circle r="2.6">
              <animateMotion dur="3.6s" begin="1.4s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#grp3" />
              </animateMotion>
            </circle>
            <circle r="2.6">
              <animateMotion dur="4.2s" begin="0.4s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#grp4" />
              </animateMotion>
            </circle>
            <circle r="3">
              <animateMotion dur="3s" begin="0.2s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#grp5" />
              </animateMotion>
            </circle>
          </g>

          {/* Static nodes */}
          <g>
            <circle cx="60" cy="200" r="6.5" fill="#0a0a0c" stroke="#5b8cff" strokeWidth="1.5" />
            <circle
              cx="190"
              cy="90"
              r="5"
              fill="#5b8cff"
              style={{ animation: 'nodePulse 3s ease-in-out infinite' }}
            />
            <circle
              cx="190"
              cy="310"
              r="5"
              fill="#5b8cff"
              style={{ animation: 'nodePulse 3s ease-in-out 0.7s infinite' }}
            />
            <circle cx="300" cy="200" r="8" fill="#0a0a0c" stroke="#5b8cff" strokeWidth="1.5" />
            <circle cx="300" cy="200" r="3" fill="#5b8cff" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-2 max-w-285 mx-auto w-full px-5 md:px-10 py-12">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-[9px] px-3.5 py-[7px] mb-[30px] font-mono text-[13px] text-muted border border-[#1f2025] bg-surface rounded-full"
        >
          <span className="relative flex" style={{ width: '8px', height: '8px' }}>
            <span
              className="absolute inset-0 rounded-full bg-success opacity-55"
              style={{ animation: 'nodePulse 2s ease-in-out infinite' }}
            />
            <span className="rounded-full bg-success" style={{ width: '8px', height: '8px' }} />
          </span>
          {t('status')}
        </div>

        {/* Name */}
        <h1
          className="font-display font-bold text-white leading-[0.97] tracking-[-0.038em] mb-[22px]"
          style={{ fontSize: 'clamp(48px, 8.4vw, 96px)', maxWidth: '13ch' }}
        >
          Gustavo Romão
        </h1>

        {/* Role */}
        <p
          className="font-mono text-accent tracking-[0.01em] mb-7"
          style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
        >
          {t('role')}
        </p>

        {/* Pitch */}
        <p
          className="text-medium leading-[1.55] mb-10 text-pretty"
          style={{ fontSize: 'clamp(17px, 2.4vw, 23px)', maxWidth: '44ch' }}
        >
          {t('pitch')}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 mb-[30px]">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-accent text-[#06070a] font-semibold text-[15px] rounded-[11px] transition-all duration-200 hover:bg-[#80a4ff] hover:-translate-y-0.5 hover:shadow-[0_12px_34px_-12px_rgba(91,140,255,0.65)]"
            style={{ paddingLeft: '22px', paddingRight: '22px', paddingTop: '13px', paddingBottom: '13px' }}
          >
            {t('cta1')} →
          </a>
          <a
            href="#contato"
            className="inline-flex items-center border border-border-light rounded-[11px] text-[15px] font-medium text-foreground transition-all duration-200 hover:border-[#3a3b42] hover:bg-[#101013]"
            style={{ paddingLeft: '22px', paddingRight: '22px', paddingTop: '13px', paddingBottom: '13px' }}
          >
            {t('cta2')}
          </a>
          <span className="bg-border-light mx-1" style={{ width: '1px', height: '22px' }} />
          <a
            href="https://github.com/gugaslitoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-muted transition-colors duration-200 hover:text-accent"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-romao-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-muted transition-colors duration-200 hover:text-accent"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Location */}
        <p className="font-mono text-[13px] text-dim">{t('location')}</p>
      </div>
    </header>
  )
}
