import { IsDevelopment } from "utils/environment";

export const baseURL = IsDevelopment ? "http://localhost:4000/api/" : "/api/";

export const authURLs = {
  singIn: `${baseURL}auth/singin`,
  singUp: `${baseURL}auth/singup`,
};

export const generalURLs = {
  getCities: `${baseURL}general/getCities`,
};
