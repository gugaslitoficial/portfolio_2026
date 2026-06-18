import { Resend } from 'resend'

export interface ContactPayload {
  name: string
  email: string
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail({ name, email, message }: ContactPayload): Promise<void> {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'gustavo-romao@hotmail.com',
    subject: `Portfólio — mensagem de ${name}`,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  })
}
