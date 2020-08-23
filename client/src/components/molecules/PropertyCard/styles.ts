import styled from "styled-components";

export const PropertyCardSpace = styled.div`
  padding: 10px;
  height: 186px;
  width: 50%;
  min-width: 430px;
  max-width: 700px;
  display: flex;
`;

export const PropertyCardCont = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px -13px rgba(0, 0, 0, 0.75);
  display: flex;
  cursor: pointer;
  transition-duration: 0.2s;
  :hover {
    box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 0.75);
  }
`;

export const PropertyImage = styled.div<{ url: string }>`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-image: url(${(props) => props.url});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
`;

export const PropertyBody = styled.div`
  flex: 2.5;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const PropertyCardTitle = styled.span`
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
`;

export const PropertyBodyCont = styled.div`
  flex: 1;
  display: flex;
`;

export const PropertyBodyLeftCont = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const PropertyBodyRightCont = styled(PropertyBodyLeftCont)`
  flex: 1;
  align-items: center;
`;

export const PropertyBodyIcons = styled.div`
  display: flex;
`;

export const PropertyBodyPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PropertyBodyPriceTitle = styled.span`
  font-size: 16px;
`;

export const PropertyBodyPriceLabel = styled.span`
  color: black;
`;
