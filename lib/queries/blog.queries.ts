// lib/queries/blog.queries.ts

/**
 * GROQ Queries für Blog Post Documents
 */

const blogPostProjection = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage {
    asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    alt
  },
  content,
  publishedAt,
  author,
  category,
  relatedTrip->{
    _id,
    title,
    "slug": slug.current
  },
  tags,
  featured,
  seo {
    title,
    description
  },
  _updatedAt
`;

const blogPostListProjection = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage {
    asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    alt
  },
  publishedAt,
  author,
  category,
  tags,
  featured
`;

/**
 * Query: Alle Blog Posts (Liste)
 */
export const ALL_BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    ${blogPostListProjection}
  }
`;

/**
 * Query: Featured Blog Posts
 */
export const FEATURED_BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3] {
    ${blogPostListProjection}
  }
`;

/**
 * Query: Blog Posts by Category
 */
export const BLOG_POSTS_BY_CATEGORY_QUERY = `
  *[_type == "blogPost" && category == $category] | order(publishedAt desc) {
    ${blogPostListProjection}
  }
`;

/**
 * Query: Blog Post by Slug (Detail)
 */
export const BLOG_POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${blogPostProjection}
  }
`;

/**
 * Query: Related Blog Posts
 */
export const RELATED_BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && slug.current != $currentSlug && (category == $category || $tag in tags)] | order(publishedAt desc)[0...3] {
    ${blogPostListProjection}
  }
`;

/**
 * Query: All Blog Slugs (für Static Generation)
 */
export const ALL_BLOG_SLUGS_QUERY = `
  *[_type == "blogPost"] {
    "slug": slug.current
  }
`;
