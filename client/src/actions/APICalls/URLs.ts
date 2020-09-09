import { IsDevelopment } from "utils/environment";

export const baseURL = IsDevelopment ? "http://localhost:4000/api/" : "/api/";

export const authURLs = {
  singIn: `${baseURL}auth/singin`,
  singUp: `${baseURL}auth/singup`,
};

export const generalURLs = {
  getCities: `${baseURL}general/getCities`,
  getFilteredPosts: `${baseURL}publication/getPublicationsByFilters`,
  uploadImages: `${baseURL}general/uploadImages`,
  downloadImage: `${baseURL}general/image`,
};

export const userURLs = {
  getPosts: `${baseURL}publication/getPublicationsByUser`,
  createPost: `${baseURL}publication/createPublication`,
  deletePost: `${baseURL}publication/deletePublication`,
};
