// components/ui/TestimonialCard/TestimonialCard.types.ts
export interface TestimonialCardProps {
  testimonial: {
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
  };
}