'use client'
import { useState } from 'react'

interface Strings {
  formName: string
  formEmail: string
  formMsg: string
  formNamePh: string
  formEmailPh: string
  formMsgPh: string
  formSend: string
  formSent: string
  formError: string
}

export function ContactForm({ strings: s }: { strings: Strings }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full bg-background border border-[#222329] rounded-[10px] px-[13px] py-[11px] text-foreground font-sans text-[14.5px] outline-none transition-colors duration-200 focus:border-accent placeholder:text-dim'

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border border-border bg-surface rounded-[18px]"
      style={{ padding: 'clamp(22px, 4vw, 32px)' }}
    >
      <label className="flex flex-col">
        <span className="font-mono text-[12px] text-[#8b8d96] mb-2">{s.formName}</span>
        <input
          name="name"
          required
          placeholder={s.formNamePh}
          className={inputClass}
          disabled={status === 'loading' || status === 'sent'}
        />
      </label>

      <label className="flex flex-col">
        <span className="font-mono text-[12px] text-[#8b8d96] mb-2">{s.formEmail}</span>
        <input
          name="email"
          type="email"
          required
          placeholder={s.formEmailPh}
          className={inputClass}
          disabled={status === 'loading' || status === 'sent'}
        />
      </label>

      <label className="flex flex-col">
        <span className="font-mono text-[12px] text-[#8b8d96] mb-2">{s.formMsg}</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={s.formMsgPh}
          className={`${inputClass} resize-vertical leading-normal`}
          disabled={status === 'loading' || status === 'sent'}
        />
      </label>

      {status !== 'sent' && (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-accent text-[#06070a] font-semibold text-[15px] px-4 py-3.25 rounded-[11px] border-none cursor-pointer font-sans transition-all duration-200 hover:bg-[#80a4ff] hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? '…' : `${s.formSend} →`}
        </button>
      )}

      {status === 'sent' && (
        <div className="border border-success/30 bg-success/10 text-success px-4 py-3.5 rounded-[11px] text-[13.5px] text-center font-mono leading-normal">
          {s.formSent}
        </div>
      )}

      {status === 'error' && (
        <div className="border border-red-500/30 bg-red-500/10 text-red-400 px-4 py-3.5 rounded-[11px] text-[13.5px] text-center font-mono leading-normal">
          {s.formError}
        </div>
      )}
    </form>
  )
}