import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY || 'mock-key-for-build'

export const resend = new Resend(apiKey)
