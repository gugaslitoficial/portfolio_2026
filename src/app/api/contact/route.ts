import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, message } = body as {
    name?: string
    email?: string
    message?: string
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  await sendContactEmail({ name, email, message })

  return NextResponse.json({ ok: true })
}