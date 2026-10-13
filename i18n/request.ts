import { getRequestConfig } from 'next-intl/server'

export const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
  // Fallback to 'fr' if locale is undefined
  const validLocale = locale && locales.includes(locale as any) ? locale : 'fr'

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  }
})
