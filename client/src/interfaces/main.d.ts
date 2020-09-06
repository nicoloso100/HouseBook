declare interface ITypesCard {
  _id: string;
  type: string;
  property: string;
  neighborhood: string;
  image: string;
  bathrooms: number;
  bedrooms: number;
  garages: number;
  area: number;
  price: number;
}

declare interface IContact {
  open: boolean;
  URL: string;
  email: string;
  whatsapp: string;
}
