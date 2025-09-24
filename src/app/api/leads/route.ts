import { NextRequest, NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validators'
import { prisma } from '@/lib/prisma'
import { sendLeadNotification, sendLeadConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = leadSchema.parse(body)

    // Save lead to database
    const lead = await prisma.lead.create({
      data: validatedData,
    })

    // Send notification email to admin
    await sendLeadNotification({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      budget: validatedData.budget,
      message: validatedData.message,
    })

    // Send confirmation email to lead (optional)
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      await sendLeadConfirmation({
        name: validatedData.name,
        email: validatedData.email,
      })
    }

    return NextResponse.json({ ok: true, id: lead.id })
  } catch (error) {
    console.error('Lead submission error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
