import { confirmAlert } from "react-confirm-alert";

class MyAlert {
  show(message: string) {
    confirmAlert({
      title: "¡Error!",
      message: message,
      buttons: [
        {
          label: "Cerrar",
          onClick: () => {},
        },
      ],
    });
  }
}
const ErrorAlert = new MyAlert();
export default ErrorAlert;
