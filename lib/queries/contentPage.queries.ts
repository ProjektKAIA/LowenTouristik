// lib/queries/contentPage.queries.ts

/**
 * GROQ Queries für Content Page Documents
 */

const contentPageProjection = `
  _id,
  title,
  "slug": slug.current,
  pageType,
  hero {
    label,
    title,
    subtitle,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  },
  sections[] {
    _type,
    _key,
    title,
    content,
    layout,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    stats[] {
      value,
      label,
      icon
    },
    text,
    buttonText,
    buttonLink
  },
  faq[] {
    _key,
    question,
    answer
  },
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
 * Query: Alle Content Pages
 */
export const ALL_CONTENT_PAGES_QUERY = `
  *[_type == "contentPage"] | order(title asc) {
    ${contentPageProjection}
  }
`;

/**
 * Query: Content Page by Slug
 */
export const CONTENT_PAGE_BY_SLUG_QUERY = `
  *[_type == "contentPage" && slug.current == $slug][0] {
    ${contentPageProjection}
  }
`;

/**
 * Query: Content Pages by Type
 */
export const CONTENT_PAGES_BY_TYPE_QUERY = `
  *[_type == "contentPage" && pageType == $pageType] | order(title asc) {
    ${contentPageProjection}
  }
`;
