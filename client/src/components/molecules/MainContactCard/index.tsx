import * as React from "react";
import {
  MainContactCardCont,
  MainContactButtons,
  MainContactSeparator,
} from "./styles";
import WhatsappButton from "components/atoms/WhatsappButton";
import CallButton from "components/atoms/CallButton";
import EmailButton from "components/atoms/EmailButton";
import WebButton from "components/atoms/WebButton";

interface MainContactCardProps {}

const MainContactCard: React.FC<MainContactCardProps> = () => {
  return (
    <MainContactCardCont>
      <span>
        Puedes contactar al dueño de publicación mediante los siguientes medios:
      </span>
      <MainContactButtons>
        <WebButton web="www.google.com" />
        <MainContactSeparator />
        <WhatsappButton phoneNumber="3203698165" text="Hola!" />
        <MainContactSeparator />
        <EmailButton email="nico.las0315@hotmail.com" />
        <MainContactSeparator />
        <CallButton phoneNumber="3203698165" />
      </MainContactButtons>
    </MainContactCardCont>
  );
};

export default MainContactCard;
