// app/[locale]/blog/page.tsx
import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { ALL_BLOG_POSTS_QUERY } from '@/lib/queries/blog.queries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SEO, SITE_INFO } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Reiseberichte & Tipps | Loewentouristik',
  description: 'Reiseberichte, Tipps und Geschichten aus Afrika. Erfahren Sie mehr über Kulturen, Menschen und unvergessliche Momente.',
  keywords: [...SEO.keywords, 'Blog', 'Reiseberichte', 'Afrika Blog', 'Reisetipps'],
  openGraph: {
    title: 'Blog - Loewentouristik',
    description: 'Reiseberichte und Tipps aus Afrika',
    url: `${SITE_INFO.url}/blog`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

interface BlogPost {
  _id: string;
  title: { de?: string; en?: string; fr?: string };
  slug: string;
  excerpt: { de?: string; en?: string; fr?: string };
  featuredImage?: {
    asset?: { url: string; metadata?: { lqip?: string } };
    alt?: string;
  };
  publishedAt: string;
  author: string;
  category: string;
  tags?: string[];
  featured?: boolean;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(ALL_BLOG_POSTS_QUERY);
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

const categoryLabels: Record<string, { de: string; en: string }> = {
  reisebericht: { de: 'Reisebericht', en: 'Travel Report' },
  tipps: { de: 'Reisetipps', en: 'Travel Tips' },
  kultur: { de: 'Kultur & Menschen', en: 'Culture & People' },
  nachhaltigkeit: { de: 'Nachhaltigkeit', en: 'Sustainability' },
  news: { de: 'News', en: 'News' },
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const posts = await getBlogPosts();

  const t = (obj: { de?: string; en?: string; fr?: string } | undefined): string => {
    if (!obj) return '';
    const loc = locale as 'de' | 'en' | 'fr';
    return obj[loc] || obj.de || '';
  };

  const getCategoryLabel = (category: string) => {
    const labels = categoryLabels[category];
    return labels ? (locale === 'de' ? labels.de : labels.en) : category;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-accent-green overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-4xl">
            <div className="inline-block bg-secondary/20 backdrop-blur-md border border-secondary/30 px-6 py-3 rounded-full font-bold text-secondary text-sm mb-6">
              📝 Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
              {locale === 'de' ? 'Geschichten aus Afrika' : 'Stories from Africa'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {locale === 'de'
                ? 'Reiseberichte, Tipps und Einblicke in die Kulturen Afrikas'
                : 'Travel reports, tips and insights into African cultures'}
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-neutral-cream"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      {post.featuredImage?.asset?.url ? (
                        <Image
                          src={post.featuredImage.asset.url}
                          alt={post.featuredImage.alt || t(post.title)}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent-green/20 flex items-center justify-center">
                          <span className="text-6xl">📝</span>
                        </div>
                      )}
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                          {getCategoryLabel(post.category)}
                        </span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                            ⭐ Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-neutral-brown/60 mb-2">
                        {formatDate(post.publishedAt)} • {post.author}
                      </p>
                      <h2 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent-green transition-colors line-clamp-2">
                        {t(post.title)}
                      </h2>
                      <p className="text-neutral-brown/70 line-clamp-3">
                        {t(post.excerpt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="max-w-2xl mx-auto text-center py-16">
                <div className="text-6xl mb-6">📝</div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  {locale === 'de' ? 'Noch keine Artikel' : 'No articles yet'}
                </h2>
                <p className="text-neutral-brown/70 text-lg mb-8">
                  {locale === 'de'
                    ? 'Hier werden bald spannende Reiseberichte und Tipps erscheinen. Erstellen Sie Blog-Artikel im Sanity CMS unter "Blog Artikel".'
                    : 'Exciting travel reports and tips will appear here soon. Create blog posts in Sanity CMS under "Blog Articles".'}
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition-colors"
                >
                  {locale === 'de' ? 'Newsletter abonnieren' : 'Subscribe to newsletter'}
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
