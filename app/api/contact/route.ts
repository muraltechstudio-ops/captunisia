import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { resend } from '@/lib/resend'

const contactSchema = z.object({
  firstName: z.string().min(1, 'Prénom requis'),
  lastName: z.string().min(1, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(1, 'Téléphone requis'),
  budget: z.string().min(1, 'Budget requis'),
  zone: z.string().min(1, 'Zone requise'),
  type: z.string().min(1, 'Type de bien requis'),
  message: z.string().min(1, 'Message requis'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Send email via Resend
    const emailHtml = `
      <h2>Nouveau message de contact - CapTunisia</h2>
      <p><strong>Nom :</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Téléphone :</strong> ${data.phone}</p>
      <p><strong>Budget :</strong> ${data.budget}</p>
      <p><strong>Zone souhaitée :</strong> ${data.zone}</p>
      <p><strong>Type de bien :</strong> ${data.type}</p>
      <p><strong>Message :</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `

    await resend.emails.send({
      from: 'CapTunisia <contact@captunisia.com>',
      to: 'contact@captunisia.com',
      replyTo: data.email,
      subject: `Nouveau contact : ${data.firstName} ${data.lastName}`,
      html: emailHtml,
    })

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending contact email:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Données invalides', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
