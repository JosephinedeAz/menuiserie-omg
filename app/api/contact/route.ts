import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { nom, email, telephone, message } = await req.json()

  const { error } = await resend.emails.send({
    from: 'OMG Contact <contact@menuiserie-omg.fr>',
    to: 'romain.glemain@gmail.com',
    subject: `Nouveau message de ${nom}`,
    text: `Nom: ${nom}\nEmail: ${email}\nTéléphone: ${telephone}\n\n${message}`,
  })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ success: true })
}
