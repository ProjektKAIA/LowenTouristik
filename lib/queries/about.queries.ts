// lib/queries/about.queries.ts

export const ABOUT_PAGE_QUERY = `
  *[_type == "aboutPage"][0] {
    _id,
    hero {
      label,
      title,
      subtitle,
      description,
      backgroundImage {
        asset->{ url },
        alt
      },
      stats[] {
        value,
        label
      }
    },
    story {
      title,
      paragraphs[] { text },
      image {
        asset->{ url },
        alt
      },
      badgeValue,
      badgeLabel
    },
    mission {
      title,
      description,
      values[] {
        icon,
        title,
        description
      }
    },
    seo {
      title,
      description,
      image { asset->{ url } }
    }
  }
`;