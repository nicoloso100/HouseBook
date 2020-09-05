import * as React from "react";
import {
  FooterBackgroundImage,
  FooterLabelsLeftCont,
  FooterLabelsRightCont,
  FooterLabelLeft,
  FooterLabelRight,
  FooterLinksCont,
  FooterLink,
} from "./styles";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterBackgroundImage>
      <FooterLabelsLeftCont>
        <FooterLabelLeft>
          © 2020 - Todos los derechos reservados
        </FooterLabelLeft>
      </FooterLabelsLeftCont>
      <FooterLabelsRightCont>
        <FooterLabelRight>House Book</FooterLabelRight>
        <FooterLinksCont>
          <FooterLink>facebook</FooterLink>
          <FooterLink>twitter</FooterLink>
        </FooterLinksCont>
      </FooterLabelsRightCont>
    </FooterBackgroundImage>
  );
};

export default Footer;
