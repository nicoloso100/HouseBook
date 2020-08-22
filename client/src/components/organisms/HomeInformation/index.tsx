import * as React from "react";
import InformationCard from "components/molecules/InformationCard";
import {
  HomeInformationContainer,
  HomeInfoLeftSide,
  HomeInfoLeftSideCardsCont,
  HomeInfoRightSide,
  HomeInfoRightSideTitle,
} from "./style";

interface HomeInformationProps {}

const HomeInformation: React.FC<HomeInformationProps> = () => {
  return (
    <HomeInformationContainer>
      <HomeInfoLeftSide>
        <HomeInfoRightSideTitle className="h4">
          ¿Quieres publicar tu inmueble?
        </HomeInfoRightSideTitle>
        <HomeInfoLeftSideCardsCont>
          <InformationCard
            theme="primary"
            title="Prueba gratis"
            text="Mediante las pruebas gratis tendrás acceso a crear las publicaciones que desees por un mes, luego de un mes tus publicaciones serán pausadas"
            tags={["1 mes", "publicaciones"]}
            buttonText="COMENZAR"
            buttonAction={() => {}}
          />
          <InformationCard
            theme="success"
            title="Plan ilimitado"
            text="Si te suscribes al plan ilimitado podrás crear las publicaciones que desees y no tendrás límite de tiempo, el costo de éste plan es $"
            tags={["1 mes", "publicaciones"]}
            buttonText="COMPRAR"
            buttonAction={() => {}}
          />
        </HomeInfoLeftSideCardsCont>
      </HomeInfoLeftSide>
      <HomeInfoRightSide>
        <HomeInfoRightSideTitle className="h5">
          ¿Quiénes somos?
        </HomeInfoRightSideTitle>
        <p className="h6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </HomeInfoRightSide>
    </HomeInformationContainer>
  );
};

export default HomeInformation;
