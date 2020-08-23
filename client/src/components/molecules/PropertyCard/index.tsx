import * as React from "react";
import {
  PropertyCardCont,
  PropertyCardSpace,
  PropertyImage,
  PropertyBody,
  PropertyCardTitle,
  PropertyBodyCont,
  PropertyBodyPrice,
  PropertyBodyPriceTitle,
  PropertyBodyPriceLabel,
  PropertyBodyLeftCont,
  PropertyBodyRightCont,
  PropertyBodyIcons,
} from "./styles";
import { formatMoney } from "utils";
import MyButton from "components/atoms/MyButton";
import PropertyCardIcon from "components/atoms/PropertyCardIcon";

interface PropertyCardProps {
  information: IPropertyCard;
  onCardClick: () => void;
  onButtonClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  information,
  onCardClick,
  onButtonClick,
}) => {
  const setOnButtonClick = (event: React.MouseEvent<any, MouseEvent>) => {
    event.stopPropagation();
    onButtonClick();
  };

  return (
    <PropertyCardSpace onClick={onCardClick}>
      <PropertyCardCont>
        <PropertyImage url={information.image} />
        <PropertyBody>
          <PropertyCardTitle>{`${information.type} de ${information.property}, ${information.neighborhood}`}</PropertyCardTitle>
          <PropertyBodyCont>
            <PropertyBodyLeftCont>
              <PropertyBodyIcons>
                <PropertyCardIcon
                  withSeparator
                  icon="fa fa-bath"
                  value={information.bathrooms}
                />
                <PropertyCardIcon
                  withSeparator
                  icon="fa fa-bed"
                  value={information.bedrooms}
                />
                <PropertyCardIcon
                  withSeparator
                  icon="fa fa-car"
                  value={information.garages}
                />
              </PropertyBodyIcons>
              <PropertyBodyPrice>
                <PropertyBodyPriceTitle>Precio</PropertyBodyPriceTitle>
                <PropertyBodyPriceLabel>
                  {formatMoney(information.price)}
                </PropertyBodyPriceLabel>
              </PropertyBodyPrice>
            </PropertyBodyLeftCont>
            <PropertyBodyRightCont>
              <PropertyCardIcon
                icon="fa fa-square"
                value={`${information.area} m²`}
              />
              <MyButton small text="contacto" onClick={setOnButtonClick} />
            </PropertyBodyRightCont>
          </PropertyBodyCont>
        </PropertyBody>
      </PropertyCardCont>
    </PropertyCardSpace>
  );
};

export default PropertyCard;
