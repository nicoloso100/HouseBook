import * as React from "react";
import PublicationForm from "molecules/PublicationForm/index";
import {
  HomeContainer,
  HomeTitleText
} from "./styles";

const HomePublication = () => {
  return (
    <HomeContainer>
      <HomeTitleText>
        Publicación de inmueble
      </HomeTitleText>
      <PublicationForm/>
    </HomeContainer>
  );
};

export default HomePublication;
