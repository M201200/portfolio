import { z } from 'zod'

export const TOPICS = [
  { value: 'hiring', label: 'Hiring / role inquiry' },
  { value: 'freelance', label: 'Freelance / contract' },
  { value: 'other', label: 'Other' },
] as const

export const TOPIC_LABELS: Record<(typeof TOPICS)[number]['value'], string> =
  Object.fromEntries(TOPICS.map((t) => [t.value, t.label])) as Record<
    (typeof TOPICS)[number]['value'],
    string
  >

export const CONTACT_SCHEMA = z.object({
  topic: z.enum(['hiring', 'freelance', 'other'], {
    error: 'Select a topic',
  }),
  email: z.email('Enter a valid email').max(200),
  message: z
    .string()
    .trim()
    .min(6, 'Message is too short')
    .max(3000, 'Message is too long'),
})

export type ContactInput = z.infer<typeof CONTACT_SCHEMA>
