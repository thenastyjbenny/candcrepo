import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  budget: z.enum(['SMALL', 'STANDARD', 'PREMIUM'], {
    required_error: 'Please select a budget range',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type LeadFormData = z.infer<typeof leadSchema>

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>
