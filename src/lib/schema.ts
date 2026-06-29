import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(8, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  service: z.enum([
    'ceramic-coating',
    'paint-protection-film',
    'paint-correction',
    'interior-detailing',
    'exterior-detailing',
    'cut-and-polish',
    'full-detail',
    'express-detail',
    'other',
  ]).refine((val) => val !== undefined, { message: 'Please select a service' }),
  vehicle: z
    .string()
    .min(2, 'Please enter your vehicle make and model')
    .max(100, 'Vehicle description is too long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const serviceOptions = [
  { value: 'ceramic-coating', label: 'Ceramic Coating' },
  { value: 'paint-protection-film', label: 'Paint Protection Film (PPF)' },
  { value: 'paint-correction', label: 'Paint Correction' },
  { value: 'interior-detailing', label: 'Interior Detailing' },
  { value: 'exterior-detailing', label: 'Exterior Detailing' },
  { value: 'cut-and-polish', label: 'Cut and Polish' },
  { value: 'full-detail', label: 'Full Detail Package' },
  { value: 'express-detail', label: 'Express Detail' },
  { value: 'other', label: 'Other / Not Sure' },
] as const
