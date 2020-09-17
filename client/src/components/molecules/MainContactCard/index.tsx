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
import CopyToClipboard from "react-copy-to-clipboard";
import { useToasts } from "react-toast-notifications";

interface MainContactCardProps {
  webSite?: string;
  whatsApp?: string;
  email: string;
  phoneNumber?: string;
}

const MainContactCard: React.FC<MainContactCardProps> = ({
  webSite,
  whatsApp,
  email,
  phoneNumber,
}) => {
  const { addToast } = useToasts();

  return (
    <MainContactCardCont>
      <span>
        Puedes contactar al dueño de publicación mediante los siguientes medios:
      </span>
      <MainContactButtons>
        {webSite && (
          <>
            <WebButton web={webSite} />
            <MainContactSeparator />
          </>
        )}
        {whatsApp && (
          <>
            <WhatsappButton phoneNumber={whatsApp} text="Hola!" />
            <MainContactSeparator />
          </>
        )}
        {email && (
          <>
            <CopyToClipboard
              text={email}
              onCopy={() =>
                addToast("Se ha copiado el email al portapapeles.", {
                  appearance: "success",
                })
              }
            >
              <span>
                <EmailButton email={email} />
              </span>
            </CopyToClipboard>
            <MainContactSeparator />
          </>
        )}
        {phoneNumber && (
          <>
            <CopyToClipboard
              text={email}
              onCopy={() =>
                addToast("Se ha copiado el teléfono al portapapeles.", {
                  appearance: "success",
                })
              }
            >
              <CallButton phoneNumber={phoneNumber} />
            </CopyToClipboard>
          </>
        )}
      </MainContactButtons>
    </MainContactCardCont>
  );
};

export default MainContactCard;
