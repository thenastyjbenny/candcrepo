import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const packages = await prisma.package.findMany({
      orderBy: {
        order: 'asc',
      },
    })

    return NextResponse.json(packages)
  } catch (error) {
    console.error('Packages fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
