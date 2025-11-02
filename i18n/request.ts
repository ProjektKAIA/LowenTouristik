// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Load homepage messages (main JSON file)
  const homepageMessages = (await import(`@/messages/${locale}.json`)).default;

  // Load subpage messages (from locale folders)
  let contactMessages = {};
  
  try {
    contactMessages = (await import(`@/messages/${locale}/contact.json`)).default;
  } catch (error) {
    // If contact.json doesn't exist yet, use empty object
    console.warn(`Contact messages for locale "${locale}" not found`);
  }

  return {
    locale,
    messages: {
      ...homepageMessages,
      contact: contactMessages,
    }
  };
});