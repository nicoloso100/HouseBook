import { HttpRequest } from "./HttpRequest";
import { authURLs } from "./URLs";

export const SingIn = async (values: LoginValues): Promise<void> => {
  try {
    await new HttpRequest().Post(authURLs.singIn, values);
  } catch (err) {
    throw new Error(err);
  }
};
