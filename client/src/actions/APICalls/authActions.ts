import { HttpRequest } from "./HttpRequest";
import { authURLs } from "./URLs";

export const SingIn = (values: LoginValues): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      await new HttpRequest().Post(authURLs.singIn, values);
      resolve();
    } catch {
      reject();
    }
  });
};
