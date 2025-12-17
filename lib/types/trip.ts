// lib/types/trip.ts

export interface TripCardData {
  _id: string;
  title: string;
  slug: string;
  region: string;
  duration: number;
  price: number;
  maxPersons?: number;
  shortDescription: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  availability?: 'available' | 'limited' | 'full';
  spotsLeft?: number;
  featured?: boolean;
}

export interface TripDetail extends TripCardData {
  country: string;
  gallery?: {
    asset: {
      url: string;
    };
    alt?: string;
    caption?: string;
  }[];
  highlights?: string[];
  itinerary?: ItineraryDay[];
  mapStations?: MapStation[];
  included?: string[];
  notIncluded?: string[];
  accommodation?: {
    type?: string;
    description?: string;
    standard?: string;
  };
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  activities?: string[];
  accommodation?: string;
  meals?: string;
}

export interface MapStation {
  day: number;
  name: string;
  lat: number;
  lng: number;
  title: string;
  description?: string;
}