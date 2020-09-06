import { HttpRequest } from "./HttpRequest";
import { authURLs } from "./URLs";
import erroAlert from "utils/errorAlert";
import successAlert from "utils/successAlert";

export const SingIn = (values: LoginValues): Promise<IUserInformation> => {
  return new Promise(async (resolve, reject) => {
    try {
      var request = await new HttpRequest().Post<IUserInformation>(
        authURLs.singIn,
        values
      );
      resolve(request.result);
    } catch {
      reject();
    }
  });
};

export const SingUp = (values: registerUserValues): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      if (values.password !== values.repitPassword) {
        erroAlert.show("Las contraseñas son diferentes");
        reject();
      } else {
        await new HttpRequest().Post(authURLs.singUp, values);
        successAlert.show("Usario registrado correctamente");
        resolve();
      }
    } catch {
      reject();
    }
  });
};
