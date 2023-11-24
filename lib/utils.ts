import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { kv } from '@vercel/kv'
import { randomUUID } from 'crypto'
import z from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function postMessage(message: MessageFormData): Promise<void> {
  // await delay(1000)
  await kv.lpush('messages', {
    id: randomUUID(),
    date: new Date().toISOString(),
    name: message.name,
    content: message.content,
  })
}

export const formDataSchema = z.object({
  name: z
    .string()
    .min(3, 'Please enter a name of at least 3 characters.')
    .max(50, 'Please enter at most 50 characters.'),
  content: z
    .string()
    .min(3, 'Please enter a message of at least 3 characters.')
    .max(500, 'Please enter at most 500 characters.'),
})