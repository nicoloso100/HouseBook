import * as React from "react";
import {
  HomeTitleCont,
  HomeTitleText,
  HomeSubTitle,
  HomeBackgroundImage,
} from "./styles";

const HomeTitle = () => {
  return (
    <HomeBackgroundImage>
      <HomeTitleCont>
        <HomeTitleText>House Book</HomeTitleText>
        <HomeSubTitle>Busca tu inmueble...</HomeSubTitle>
      </HomeTitleCont>
    </HomeBackgroundImage>
  );
};

export default HomeTitle;
