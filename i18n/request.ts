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
  let valuesMessages = {};
  let tripsMessages = {};
  
  try {
    contactMessages = (await import(`@/messages/${locale}/contact.json`)).default;
  } catch (error) {
    console.warn(`Contact messages for locale "${locale}" not found`);
  }

  try {
    valuesMessages = (await import(`@/messages/${locale}/values.json`)).default;
  } catch (error) {
    console.warn(`Values messages for locale "${locale}" not found`);
  }

  try {
    tripsMessages = (await import(`@/messages/${locale}/trips.json`)).default;
  } catch (error) {
    console.warn(`Trips messages for locale "${locale}" not found`);
  }

  return {
    locale,
    messages: {
      ...homepageMessages,
      contact: contactMessages,
      values: valuesMessages,
      trips: tripsMessages,
    }
  };
});