import styled from "styled-components";

import Background1 from "assets/images/background/1.jpg";
import Background2 from "assets/images/background/2.jpg";
import Background3 from "assets/images/background/3.jpg";
import Background4 from "assets/images/background/4.jpg";
import { device } from "utils/responsiveTemplate";

const getBackgound = () => {
  var randImage = Math.floor(Math.random() * 5 + 1);
  switch (randImage) {
    case 1:
      return Background1;
    case 2:
      return Background2;
    case 3:
      return Background3;
    case 4:
      return Background4;
    default:
      return Background1;
  }
};

export const HomeBackgroundImage = styled.div`
  background-image: url(${getBackgound()});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 60vh;
  min-height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.mobile} {
    padding: 75px 20px 20px 20px;
  }
`;

export const HomeBackgroundImageCollapsed = styled.div`
  background-image: url(${getBackgound()});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 55px;
  @media ${device.mobile} {
    padding: 75px 20px 20px 20px;
  }
`;

export const HomeTitleText = styled.span`
  color: white;
  font-size: 96px;
  font-weight: 100;
  font-family: "Poiret One", cursive;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
`;

export const HomeSubTitle = styled.span<{ space: string }>`
  color: white;
  margin-left: ${(props) => props.space};
  font-size: 34px;
  font-weight: 100;
  font-family: "Actor", sans-serif;
`;

export const HomeTitleCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeTitleCollapsedCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
