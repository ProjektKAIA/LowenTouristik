// lib/sanity/image.ts
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';

const builder = imageUrlBuilder(client);

/**
 * Helper function to generate optimized image URLs from Sanity
 * @param source - Sanity image object
 * @returns Image URL builder
 * 
 * @example
 * // Basic usage
 * <img src={urlFor(trip.mainImage).width(800).height(600).url()} />
 * 
 * @example
 * // With quality and format
 * <img src={urlFor(trip.mainImage).width(1200).height(800).quality(90).format('webp').url()} />
 * 
 * @example
 * // With auto format (automatically serves WebP when supported)
 * <img src={urlFor(trip.mainImage).width(800).auto('format').url()} />
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Get a responsive srcSet for an image
 * @param source - Sanity image object
 * @param widths - Array of widths for srcSet
 * @returns srcSet string
 * 
 * @example
 * <img 
 *   src={urlFor(image).width(800).url()}
 *   srcSet={getImageSrcSet(image, [400, 800, 1200])}
 *   sizes="(max-width: 768px) 100vw, 800px"
 * />
 */
export function getImageSrcSet(
  source: SanityImageSource,
  widths: number[] = [400, 800, 1200, 1600]
): string {
  return widths
    .map((width) => `${urlFor(source).width(width).auto('format').url()} ${width}w`)
    .join(', ');
}

/**
 * Get optimized image dimensions while maintaining aspect ratio
 * @param source - Sanity image object
 * @param maxWidth - Maximum width
 * @param maxHeight - Maximum height
 * @returns Image URL with optimized dimensions
 */
export function getOptimizedImageUrl(
  source: SanityImageSource,
  maxWidth: number,
  maxHeight?: number
): string {
  const builder = urlFor(source).width(maxWidth).auto('format').quality(85);
  
  if (maxHeight) {
    return builder.height(maxHeight).fit('crop').url();
  }
  
  return builder.url();
}