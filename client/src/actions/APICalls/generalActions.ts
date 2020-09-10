import { HttpRequest } from "./HttpRequest";
import { generalURLs } from "./URLs";

export const GetCities = async (): Promise<ICity[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await new HttpRequest().Get<ICity[]>(
        generalURLs.getCities
      );
      resolve(request.result);
    } catch {
      reject();
    }
  });
};

export const UploadImages = async (images: FormData): Promise<string[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resultImages = await new HttpRequest().Upload<string[]>(
        generalURLs.uploadImages,
        images
      );
      resolve(resultImages.result);
    } catch {
      reject();
    }
  });
};
