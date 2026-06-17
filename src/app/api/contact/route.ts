import { NextRequest, NextResponse } from 'next/server'

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

  console.log('[contact]', { name, email, message: message.slice(0, 100) })

  return NextResponse.json({ ok: true })
}
