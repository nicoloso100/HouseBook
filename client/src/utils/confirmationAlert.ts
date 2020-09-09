import { confirmAlert } from "react-confirm-alert";

class MyAlert {
  show(message: string, callback: Function) {
    confirmAlert({
      title: "¡Error!",
      message: message,
      buttons: [
        {
          label: "Si",
          onClick: () => callback(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  }
}
const ConfirmationAlert = new MyAlert();
export default ConfirmationAlert;
