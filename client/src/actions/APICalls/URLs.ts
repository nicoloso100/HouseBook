//export const baseURL = "http://localhost:4000/api/";
export const baseURL = "http://192.168.0.19:4000/api/";

export const authURLs = {
  singIn: `${baseURL}auth/singin`,
  singUp: `${baseURL}auth/singup`,
};

export const generalURLs = {
  getCities: `${baseURL}general/getCities`,
};
