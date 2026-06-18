import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Space_Grotesk, Geist, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '@/app/globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' })

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isPt = locale === 'pt'
  return {
    title: isPt
      ? 'Gustavo Romão — Desenvolvedor Full Stack'
      : 'Gustavo Romão — Full Stack Developer',
    description: isPt
      ? 'Portfólio de Gustavo Romão, desenvolvedor full stack especializado em React, Next.js e TypeScript.'
      : 'Portfolio of Gustavo Romão, full stack developer specializing in React, Next.js and TypeScript.',
    openGraph: {
      type: 'website',
      locale: isPt ? 'pt_BR' : 'en_US',
      siteName: 'Gustavo Romão',
    },
  }
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: ReactNode, params: Promise<{ locale: string }> }>) {
  const { locale } = await params

  if (!(routing.locales as readonly string[]).includes(locale)) { notFound() }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${geist.variable} ${jetbrainsMono.variable}`} >
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}