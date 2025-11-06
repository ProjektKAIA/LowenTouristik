// lib/sanity/imageUtils.ts
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Optimierte Bild-URLs für verschiedene Verwendungszwecke
export const imageConfig = {
  // Hero Images (Full Width)
  hero: (source: SanityImageSource) =>
    urlFor(source)
      .width(1920)
      .height(1080)
      .quality(85)
      .format('webp')
      .url(),

  // Cards/Thumbnails
  thumbnail: (source: SanityImageSource) =>
    urlFor(source)
      .width(600)
      .height(400)
      .quality(80)
      .format('webp')
      .url(),

  // Detail Pages
  detail: (source: SanityImageSource) =>
    urlFor(source)
      .width(1200)
      .height(800)
      .quality(85)
      .format('webp')
      .url(),

  // OG Images
  og: (source: SanityImageSource) =>
    urlFor(source)
      .width(1200)
      .height(630)
      .quality(90)
      .format('jpg')
      .url(),

  // Gallery Images
  gallery: (source: SanityImageSource) =>
    urlFor(source)
      .width(800)
      .height(600)
      .quality(80)
      .format('webp')
      .url(),

  // Avatar/Small Images
  avatar: (source: SanityImageSource) =>
    urlFor(source)
      .width(200)
      .height(200)
      .quality(80)
      .format('webp')
      .url(),

  // Responsive Srcset Generator
  srcset: (source: SanityImageSource, widths: number[] = [640, 768, 1024, 1280, 1536]) =>
    widths
      .map(width => `${urlFor(source).width(width).quality(85).format('webp').url()} ${width}w`)
      .join(', '),
};

// Platzhalter-Blur für Next.js Image
export async function getImageBlurData(source: SanityImageSource): Promise<string> {
  const blurUrl = urlFor(source)
    .width(20)
    .height(20)
    .blur(10)
    .quality(20)
    .format('webp')
    .url();
  
  return blurUrl;
}