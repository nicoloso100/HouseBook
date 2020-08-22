import { HttpRequest } from "./HttpRequest";
import { generalURLs } from "./URLs";

declare interface IAPIResponse<T> {
  res: T;
  status: number;
}

export const GetServices = async (): Promise<ICity[]> => {
  try {
    const cities = await new HttpRequest().Get<any>(generalURLs.getCities);
    console.log(cities);
    return cities;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
