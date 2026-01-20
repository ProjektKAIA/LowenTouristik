// app/[locale]/galerie/page.tsx
import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SEO, SITE_INFO } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Galerie - Bilder aus Afrika | Loewentouristik',
  description: 'Bildergalerie von Loewentouristik Afrika-Reisen. Eindrücke aus Kamerun, Sierra Leone, Senegal und mehr.',
  keywords: [...SEO.keywords, 'Galerie', 'Fotos', 'Afrika Bilder', 'Reisefotos'],
  openGraph: {
    title: 'Galerie - Loewentouristik',
    description: 'Bildergalerie aus Afrika',
    url: `${SITE_INFO.url}/galerie`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

// Query to get images from testimonials and trips
const GALLERY_IMAGES_QUERY = `
{
  "testimonialImages": *[_type == "testimonial" && defined(gallery)] {
    _id,
    "name": name,
    "tripTitle": trip.de,
    gallery[] {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt,
      caption
    }
  },
  "tripImages": *[_type == "trip" && defined(mainImage)] {
    _id,
    "title": title.de,
    "slug": slug.current,
    mainImage {
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
    galleryImages[] {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt,
      caption
    }
  }
}
`;

interface GalleryImage {
  id: string;
  url: string;
  alt?: string;
  caption?: string;
  source: string;
  sourceTitle?: string;
  sourceSlug?: string;
  lqip?: string;
}

async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const data = await client.fetch(GALLERY_IMAGES_QUERY);
    const images: GalleryImage[] = [];

    // Process testimonial images
    if (data.testimonialImages) {
      for (const testimonial of data.testimonialImages) {
        if (testimonial.gallery) {
          for (const img of testimonial.gallery) {
            if (img.asset?.url) {
              images.push({
                id: img.asset._id,
                url: img.asset.url,
                alt: img.alt || `Foto von ${testimonial.name}`,
                caption: img.caption,
                source: 'testimonial',
                sourceTitle: testimonial.tripTitle || testimonial.name,
                lqip: img.asset.metadata?.lqip,
              });
            }
          }
        }
      }
    }

    // Process trip images
    if (data.tripImages) {
      for (const trip of data.tripImages) {
        // Main image
        if (trip.mainImage?.asset?.url) {
          images.push({
            id: trip.mainImage.asset._id,
            url: trip.mainImage.asset.url,
            alt: trip.mainImage.alt || trip.title,
            source: 'trip',
            sourceTitle: trip.title,
            sourceSlug: trip.slug,
            lqip: trip.mainImage.asset.metadata?.lqip,
          });
        }
        // Gallery images
        if (trip.galleryImages) {
          for (const img of trip.galleryImages) {
            if (img.asset?.url) {
              images.push({
                id: img.asset._id,
                url: img.asset.url,
                alt: img.alt || trip.title,
                caption: img.caption,
                source: 'trip',
                sourceTitle: trip.title,
                sourceSlug: trip.slug,
                lqip: img.asset.metadata?.lqip,
              });
            }
          }
        }
      }
    }

    // Remove duplicates and shuffle
    const uniqueImages = images.filter(
      (img, index, self) => index === self.findIndex((i) => i.id === img.id)
    );

    return uniqueImages;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GaleriePage({ params }: PageProps) {
  const { locale } = await params;
  const images = await getGalleryImages();

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
              📸 {locale === 'de' ? 'Galerie' : 'Gallery'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
              {locale === 'de' ? 'Eindrücke aus Afrika' : 'Impressions from Africa'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {locale === 'de'
                ? 'Bilder sagen mehr als tausend Worte – entdecken Sie die Schönheit Afrikas'
                : 'Pictures speak louder than words – discover the beauty of Africa'}
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {images.length > 0 ? (
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {images.map((image, index) => (
                  <div
                    key={image.id + index}
                    className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-neutral-cream"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt || 'Afrika Bild'}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      placeholder={image.lqip ? 'blur' : 'empty'}
                      blurDataURL={image.lqip}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        {image.caption && (
                          <p className="text-white text-sm mb-1">{image.caption}</p>
                        )}
                        {image.sourceSlug ? (
                          <Link
                            href={`/reisen/${image.sourceSlug}`}
                            className="text-secondary text-sm font-semibold hover:underline"
                          >
                            {image.sourceTitle}
                          </Link>
                        ) : (
                          <p className="text-secondary text-sm font-semibold">
                            {image.sourceTitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="max-w-2xl mx-auto text-center py-16">
                <div className="text-6xl mb-6">📷</div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  {locale === 'de' ? 'Galerie wird gefüllt' : 'Gallery is being filled'}
                </h2>
                <p className="text-neutral-brown/70 text-lg mb-8">
                  {locale === 'de'
                    ? 'Bilder werden automatisch aus Reisen und Erfahrungsberichten gezogen. Fügen Sie Bilder zu Ihren Reisen oder Testimonials im Sanity CMS hinzu.'
                    : 'Images are automatically pulled from trips and testimonials. Add images to your trips or testimonials in Sanity CMS.'}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/reisen"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition-colors"
                  >
                    {locale === 'de' ? 'Reisen entdecken' : 'Discover Trips'}
                  </Link>
                  <Link
                    href="/erfahrungen"
                    className="bg-neutral-cream hover:bg-neutral-cream/80 text-primary px-6 py-3 rounded-full font-bold transition-colors"
                  >
                    {locale === 'de' ? 'Erfahrungsberichte' : 'Testimonials'}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        {images.length > 0 && (
          <section className="py-16 bg-neutral-cream/30">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  {locale === 'de' ? 'Erlebe es selbst' : 'Experience it yourself'}
                </h2>
                <p className="text-neutral-brown/70 text-lg mb-8">
                  {locale === 'de'
                    ? 'Diese Bilder sind nur ein kleiner Vorgeschmack. Die wahre Schönheit Afrikas musst du selbst erleben.'
                    : 'These pictures are just a small preview. You have to experience the true beauty of Africa yourself.'}
                </p>
                <Link
                  href="/reisen"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                >
                  {locale === 'de' ? 'Reisen entdecken' : 'Discover Trips'}
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
