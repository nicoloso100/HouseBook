import * as React from "react";
import { CallButtonCont, CallButtonIcon, CallButtonText } from "./styles";

interface CallButtonProps {
  phoneNumber: string;
}

const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
  return (
    <CallButtonCont>
      <CallButtonIcon className="fa fa-phone" />
      <CallButtonText>Llamar al número +57 {phoneNumber}</CallButtonText>
    </CallButtonCont>
  );
};

export default CallButton;
