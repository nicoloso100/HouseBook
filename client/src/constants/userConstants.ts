export const USER_STORAGE = "USER_STORAGE";

export const defaultCreatePostForm: ICreatePost = {
  _id: "",
  price: 0,
  dimensions: 0,
  rooms: 0,
  bathrooms: 0,
  parkings: 0,
  neighborhood: "",
  thumbnail: "",
  type_of_housing: "",
  type_of_sale: "",
  user_id: "",
  title: "",
  ubication: "",
  city: "",
  nearby_sites: "",
  stratum: 0,
  antiquity: 0,
  description: "",
  images: [],
};

export const defaultOpenModal: IOpenModal = {
  open: false,
  value: undefined,
};
