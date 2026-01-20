// app/[locale]/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity/client';
import { BLOG_POST_BY_SLUG_QUERY, ALL_BLOG_SLUGS_QUERY } from '@/lib/queries/blog.queries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: { de?: string; en?: string; fr?: string };
  slug: string;
  excerpt: { de?: string; en?: string; fr?: string };
  featuredImage?: {
    asset?: { url: string; metadata?: { dimensions?: { width: number; height: number } } };
    alt?: string;
  };
  content: { de?: any[]; en?: any[]; fr?: any[] };
  publishedAt: string;
  author: string;
  category: string;
  relatedTrip?: {
    _id: string;
    title: { de?: string; en?: string; fr?: string };
    slug: string;
  };
  tags?: string[];
  seo?: { title?: string; description?: string };
}

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(BLOG_POST_BY_SLUG_QUERY, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateStaticParams() {
  const posts = await client.fetch(ALL_BLOG_SLUGS_QUERY);
  return posts?.map((post: { slug: string }) => ({ slug: post.slug })) || [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return { title: 'Artikel nicht gefunden' };

  const title = post.seo?.title || post.title?.de || 'Blog';
  const description = post.seo?.description || post.excerpt?.de || '';

  return {
    title: `${title} | Loewentouristik Blog`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.featuredImage?.asset?.url ? [post.featuredImage.asset.url] : [],
    },
  };
}

const categoryLabels: Record<string, { de: string; en: string }> = {
  reisebericht: { de: 'Reisebericht', en: 'Travel Report' },
  tipps: { de: 'Reisetipps', en: 'Travel Tips' },
  kultur: { de: 'Kultur & Menschen', en: 'Culture & People' },
  nachhaltigkeit: { de: 'Nachhaltigkeit', en: 'Sustainability' },
  news: { de: 'News', en: 'News' },
};

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const t = (obj: { de?: string; en?: string; fr?: string } | undefined): string => {
    if (!obj) return '';
    const loc = locale as 'de' | 'en' | 'fr';
    return obj[loc] || obj.de || '';
  };

  const getRichText = (obj: { de?: any[]; en?: any[]; fr?: any[] } | undefined): any[] => {
    if (!obj) return [];
    const loc = locale as 'de' | 'en' | 'fr';
    return obj[loc] || obj.de || [];
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

      <main className="min-h-screen bg-white">
        {/* Back Link */}
        <div className="bg-neutral-cream/30 pt-24 pb-4">
          <div className="container mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-accent-green transition-colors"
            >
              <ArrowLeft size={18} />
              <span>{locale === 'de' ? 'Zurück zum Blog' : 'Back to Blog'}</span>
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article>
          <header className="bg-neutral-cream/30 pb-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                {/* Category */}
                <span className="inline-block bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  {getCategoryLabel(post.category)}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary mb-6 leading-tight">
                  {t(post.title)}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-6 text-neutral-brown/70">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>{post.author}</span>
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Tag size={18} />
                      <span>{post.tags.slice(0, 3).join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage?.asset?.url && (
            <div className="container mx-auto px-6 -mt-4 mb-12">
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={post.featuredImage.asset.url}
                    alt={post.featuredImage.alt || t(post.title)}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-primary hover:prose-a:text-accent-green prose-img:rounded-2xl">
                <PortableText value={getRichText(post.content)} />
              </div>

              {/* Related Trip */}
              {post.relatedTrip && (
                <div className="mt-16 p-8 bg-gradient-to-br from-primary to-accent-green rounded-3xl text-white">
                  <p className="text-secondary font-bold text-sm mb-2">
                    {locale === 'de' ? 'Passende Reise' : 'Related Trip'}
                  </p>
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    {t(post.relatedTrip.title)}
                  </h3>
                  <Link
                    href={`/reisen/${post.relatedTrip.slug}`}
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded-full font-bold transition-colors"
                  >
                    {locale === 'de' ? 'Reise entdecken' : 'Discover trip'}
                  </Link>
                </div>
              )}

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-neutral-cream">
                  <p className="text-sm text-neutral-brown/60 mb-3">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-neutral-cream px-4 py-2 rounded-full text-sm text-neutral-brown"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-neutral-cream/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                {locale === 'de' ? 'Bereit für dein Abenteuer?' : 'Ready for your adventure?'}
              </h2>
              <p className="text-neutral-brown/70 mb-8">
                {locale === 'de'
                  ? 'Entdecke unsere handverlesenen Reisen und erlebe Afrika hautnah.'
                  : 'Discover our handpicked trips and experience Africa up close.'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/reisen"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition-colors"
                >
                  {locale === 'de' ? 'Alle Reisen' : 'All Trips'}
                </Link>
                <Link
                  href="/kontakt"
                  className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-bold transition-colors"
                >
                  {locale === 'de' ? 'Beratung anfragen' : 'Request Consultation'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
