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
        <HomeInfoRightSideTitle className="display-4">
          ¿Quieres publicar tu inmueble?
        </HomeInfoRightSideTitle>
        <HomeInfoLeftSideCardsCont>
          <InformationCard
            theme="warning"
            title="Prueba gratis"
            text="Mediante las pruebas gratis tendrás acceso a crear las publicaciones que desees por un mes."
            tags={["1 mes", "publicaciones"]}
            buttonText="COMENZAR"
            buttonAction={() => {}}
          />
          <InformationCard
            theme="primary"
            title="Plan básico"
            text="Si te suscribes al plan básico podrás crear las publicaciones que desees por 4 meses, el costo de éste plan es $"
            tags={["4 meses", "publicaciones"]}
            buttonText="COMPRAR"
            buttonAction={() => {}}
          />
          <InformationCard
            theme="success"
            title="Plan premium"
            text="Si te suscribes al plan premium podrás crear las publicaciones que desees por 12 meses, el costo de éste plan es $"
            tags={["12 meses", "premium"]}
            buttonText="COMPRAR"
            buttonAction={() => {}}
          />
        </HomeInfoLeftSideCardsCont>
      </HomeInfoLeftSide>
      <HomeInfoRightSide>
        <HomeInfoRightSideTitle className="display-4">
          ¿Quiénes somos?
        </HomeInfoRightSideTitle>
        <p>
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
