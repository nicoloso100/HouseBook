import * as React from "react";
import { EmailButtonCont, EmailButtonIcon, EmailButtonText } from "./styles";

interface EmailButtonProps {
  email: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({ email }) => {
  return (
    <EmailButtonCont>
      <EmailButtonIcon className="fa fa-envelope" />
      <EmailButtonText>Escribir un correo a {email}</EmailButtonText>
    </EmailButtonCont>
  );
};

export default EmailButton;
