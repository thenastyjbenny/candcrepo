import { describe, it, expect, vi, beforeEach } from 'vitest'
import { POST } from '@/app/api/leads/route'
import { NextRequest } from 'next/server'

// Mock Prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    lead: {
      create: vi.fn()
    }
  }
}))

// Mock email functions
vi.mock('@/lib/email', () => ({
  sendLeadNotification: vi.fn(),
  sendLeadConfirmation: vi.fn()
}))

describe('/api/leads', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should create a lead with valid data', async () => {
    const mockLead = {
      id: 'test-id',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      budget: 'STANDARD',
      message: 'Test message',
      createdAt: new Date()
    }

    const { prisma } = await import('@/lib/prisma')
    vi.mocked(prisma.lead.create).mockResolvedValue(mockLead)

    const request = new NextRequest('http://localhost:3000/api/leads', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        budget: 'STANDARD',
        message: 'Test message'
      })
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.ok).toBe(true)
    expect(prisma.lead.create).toHaveBeenCalledWith({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        budget: 'STANDARD',
        message: 'Test message'
      }
    })
  })

  it('should return validation error for invalid data', async () => {
    const request = new NextRequest('http://localhost:3000/api/leads', {
      method: 'POST',
      body: JSON.stringify({
        name: '', // Invalid: empty name
        email: 'invalid-email', // Invalid: not an email
        budget: 'INVALID', // Invalid: not in enum
        message: 'Short' // Invalid: too short
      })
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Invalid form data')
  })
})
