import { HttpRequest } from "./HttpRequest";
import { generalURLs } from "./URLs";

export const GetServices = async (): Promise<ICity[]> => {
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
