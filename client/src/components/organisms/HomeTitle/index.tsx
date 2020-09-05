import * as React from "react";
import {
  HomeTitleCont,
  HomeTitleText,
  HomeSubTitle,
  HomeBackgroundImage,
  HomeTitleCollapsedCont,
  HomeBackgroundImageCollapsed,
} from "./styles";

interface HomeTitleProps {
  collapsed?: boolean;
}

const HomeTitle: React.FC<HomeTitleProps> = ({ collapsed }) => {
  return collapsed ? (
    <HomeBackgroundImageCollapsed>
      <HomeTitleCollapsedCont>
        <HomeTitleText>House Book</HomeTitleText>
        <HomeSubTitle space="10px">Busca tu inmueble...</HomeSubTitle>
      </HomeTitleCollapsedCont>
    </HomeBackgroundImageCollapsed>
  ) : (
    <HomeBackgroundImage>
      <HomeTitleCont>
        <HomeTitleText>House Book</HomeTitleText>
        <HomeSubTitle space="0px">Busca tu inmueble...</HomeSubTitle>
      </HomeTitleCont>
    </HomeBackgroundImage>
  );
};

export default HomeTitle;
