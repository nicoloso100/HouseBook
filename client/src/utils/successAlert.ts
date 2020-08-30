import { confirmAlert } from "react-confirm-alert";

class MyAlert {
  show(message: string) {
    confirmAlert({
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
const SuccessAlert = new MyAlert();
export default SuccessAlert;
