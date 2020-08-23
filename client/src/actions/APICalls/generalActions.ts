import { HttpRequest } from "./HttpRequest";
import { generalURLs } from "./URLs";

export const GetServices = async (): Promise<ICity[]> => {
  try {
    const result = await new HttpRequest().Get<ICity[]>(generalURLs.getCities);
    return result.result;
  } catch (err) {
    throw new Error(err);
  }
};
