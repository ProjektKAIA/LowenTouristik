// lib/types/testimonial.types.ts

export interface Testimonial {
  _id: string;
  name: string;
  text: string;
  rating: number;
  trip?: string;
  date: string;
  featured?: boolean;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  videoUrl?: string;
  gallery?: {
    asset: {
      url: string;
    };
    alt?: string;
    caption?: string;
  }[];
}

export interface TestimonialCardData {
  _id: string;
  name: string;
  text: string;
  rating: number;
  trip?: string;
  date: string;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}