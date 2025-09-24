import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const mediaItems = await prisma.mediaItem.findMany({
      where: {
        isFeatured: true,
      },
      orderBy: {
        order: 'asc',
      },
    })

    return NextResponse.json(mediaItems)
  } catch (error) {
    console.error('Media fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
