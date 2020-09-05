import * as React from "react";
import { WebButtonCont, WebButtonIcon, WebButtonText } from "./styles";

interface WebButtonProps {
  web: string;
}

const WebButton: React.FC<WebButtonProps> = ({ web }) => {
  const onButtonCLick = () => {
    let url = web;
    if (!url.match(/^https?:\/\//i)) {
      url = "http://" + url;
    }
    window.open(url, "_blank");
  };

  return (
    <WebButtonCont onClick={onButtonCLick}>
      <WebButtonIcon className="fa fa-envelope" />
      <WebButtonText>Visitar la página {web}</WebButtonText>
    </WebButtonCont>
  );
};

export default WebButton;
