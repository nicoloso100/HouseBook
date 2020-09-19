declare interface ISummaryPost {
  _id: string;
  price: number;
  dimensions: number;
  rooms: number;
  bathrooms: number;
  parkings: number;
  neighborhood: string;
  thumbnail: string;
  type_of_housing: string;
  type_of_sale: string;
  email: string;
  whatsapp?: number;
  web_site?: string;
  phone?: number;
}

declare interface IPost extends ISummaryPost {
  user_id: string;
  title: string;
  ubication: string;
  city: string;
  nearby_sites: string;
  stratum: number;
  antiquity: number;
  description: string;
  images: string[];
}

declare interface ICreatePost extends IPost {
  images: File[];
}

declare interface ISendPost extends IPost {
  images: string[];
}
