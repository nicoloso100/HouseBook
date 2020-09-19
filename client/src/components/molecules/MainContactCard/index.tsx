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
  contactInfo: IContact;
}

const MainContactCard: React.FC<MainContactCardProps> = ({ contactInfo }) => {
  const { addToast } = useToasts();

  return (
    <MainContactCardCont>
      <span>
        Puedes contactar al dueño de publicación mediante los siguientes medios:
      </span>
      {contactInfo && (
        <MainContactButtons>
          {contactInfo.email && (
            <>
              <CopyToClipboard
                text={contactInfo.email}
                onCopy={() =>
                  addToast("Se ha copiado el email al portapapeles.", {
                    appearance: "success",
                  })
                }
              >
                <span>
                  <EmailButton email={contactInfo.email} />
                </span>
              </CopyToClipboard>
              <MainContactSeparator />
            </>
          )}
          {contactInfo.whatsApp && (
            <>
              <WhatsappButton phoneNumber={contactInfo.whatsApp} text="Hola!" />
              <MainContactSeparator />
            </>
          )}
          {contactInfo.webSite && (
            <>
              <WebButton web={contactInfo.webSite} />
              <MainContactSeparator />
            </>
          )}
          {contactInfo.phoneNumber && (
            <>
              <CopyToClipboard
                text={contactInfo.phoneNumber}
                onCopy={() =>
                  addToast("Se ha copiado el teléfono al portapapeles.", {
                    appearance: "success",
                  })
                }
              >
                <span>
                  <CallButton phoneNumber={contactInfo.phoneNumber} />
                </span>
              </CopyToClipboard>
            </>
          )}
        </MainContactButtons>
      )}
    </MainContactCardCont>
  );
};

export default MainContactCard;
