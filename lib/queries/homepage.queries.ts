// lib/queries/homepage.queries.ts

/**
 * GROQ Query für Homepage (Singleton)
 */
export const HOMEPAGE_QUERY = `
  *[_type == "homepage" && _id == "homepage"][0] {
    hero {
      badge,
      title,
      subtitle,
      description,
      videoUrl,
      backgroundImage {
        asset->{
          url
        }
      },
      stats[] {
        value,
        label
      }
    },
    valuesSection {
      title,
      subtitle,
      comparisons[] {
        standardTitle,
        standardDescription,
        oursTitle,
        oursDescription
      },
      badge
    },
    aboutPreview {
      label,
      title,
      paragraphs[] {
        text,
        bold
      },
      image {
        asset->{
          url
        },
        alt
      },
      badgeValue,
      badgeLabel
    },
    ctaSection {
      title,
      subtitle,
      description
    },
    seo {
      title,
      description,
      image {
        asset->{
          url
        }
      }
    }
  }
`;