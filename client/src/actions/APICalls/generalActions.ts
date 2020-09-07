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

export const GetFilteredPosts = async (
  filters: ISendFilters
): Promise<IPost[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await new HttpRequest().Post<IPost[]>(
        generalURLs.getFilteredPosts,
        filters
      );
      resolve(request.result);
    } catch {
      reject();
    }
  });
};
