declare interface IPublication {
  user_id: string;
  title: string;
  price: number;
  dimensions: number;
  rooms: number;
  bathrooms: number;
  parkings: number;
  neighborhood: string;
  ubication: string;
  city: string;
  nearby_sites: string;
  stratum: number;
  antiquity: number;
  description: string;
  type_of_housing: string;
  type_of_sale: string;
  images: string[];
  thumbnail: string;
  created_at: Date;
}
