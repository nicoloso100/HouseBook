import { HttpRequest } from "./HttpRequest";
import { authURLs } from "./URLs";
import erroAlert from 'utils/errorAlert'
import successAlert from 'utils/successAlert'

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

export const SingUp = (values: registerUserValues): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      if (values.password !== values.repitPassword){
        erroAlert.show("Las contraseñas son diferentes")
      }
      await new HttpRequest().Post(authURLs.singUp, values);
        successAlert.show("Usario registrado correctamente")
      resolve();
    } catch {
      reject();
    }
  });
};
