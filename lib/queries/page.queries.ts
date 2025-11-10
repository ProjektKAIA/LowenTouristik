// lib/queries/page.queries.ts

/**
 * GROQ Queries für Page Documents
 * 
 * Enthält NUR die Query-Definitionen, keine Fetch-Logic
 */

const pageProjection = `
  _id,
  title,
  "slug": slug.current,
  description,
  content,
  seo {
    title,
    description,
    image {
      asset->{
        url
      }
    }
  },
  _updatedAt
`;

/**
 * Query: Alle Pages
 */
export const ALL_PAGES_QUERY = `
  *[_type == "page"] | order(title asc) {
    ${pageProjection}
  }
`;

/**
 * Query: Page by Slug
 */
export const PAGE_BY_SLUG_QUERY = `
  *[_type == "page" && slug.current == $slug][0] {
    ${pageProjection}
  }
`;