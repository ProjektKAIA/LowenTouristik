// components/ui/TripCard.types.ts
export interface TripCardProps {
  trip: {
    _id: string;
    title: string;
    slug: string;
    region: string;
    duration: number;
    price: number;
    shortDescription: string;
    mainImage: {
      asset: {
        url: string;
      };
      alt?: string;
    };
    availability?: 'available' | 'limited' | 'full';
    spotsLeft?: number;
  };
}