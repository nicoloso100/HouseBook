import * as React from "react";
import {
  WhatsappButtonCont,
  WhatsappButtonIcon,
  WhatsappButtonText,
} from "./styles";

interface WhatsappButtonProps {
  phoneNumber: string;
  text: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  phoneNumber,
  text,
}) => {
  const onButtonCLick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=57${phoneNumber}&text=${text}`,
      "_blank"
    );
  };

  return (
    <WhatsappButtonCont onClick={onButtonCLick}>
      <WhatsappButtonIcon className="fa fa-whatsapp" />
      <WhatsappButtonText>Enviar mensaje de WhatsApp</WhatsappButtonText>
    </WhatsappButtonCont>
  );
};

export default WhatsappButton;
