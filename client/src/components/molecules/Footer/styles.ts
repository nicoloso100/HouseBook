import styled from "styled-components";
import FooterImage from "assets/images/background/footer.jpg";

export const FooterBackgroundImage = styled.div`
  height: 150px;
  background-image: url(${FooterImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const FooterLabelsLeftCont = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const FooterLabelsRightCont = styled(FooterLabelsLeftCont)`
  justify-content: center;
  align-items: flex-end;
`;

export const FooterLabelLeft = styled.span`
  font-size: 18px;
  color: white;
  font-family: "Actor", sans-serif;
`;

export const FooterLabelRight = styled(FooterLabelLeft)`
  text-align: right;
`;

export const FooterLinksCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const FooterLink = styled(FooterLabelRight)`
  cursor: pointer;
`;
