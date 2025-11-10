// lib/queries/settings.queries.ts

/**
 * GROQ Queries für Site Settings (Singleton)
 * 
 * Enthält NUR die Query-Definitionen, keine Fetch-Logic
 */

/**
 * Query: Site Settings (Singleton)
 */
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    _id,
    title,
    description,
    contactEmail,
    phone,
    whatsapp,
    address {
      street,
      zip,
      city,
      country
    },
    openingHours,
    socialMedia {
      facebook,
      instagram,
      youtube,
      linkedin
    },
    newsletterText,
    footerText
  }
`;