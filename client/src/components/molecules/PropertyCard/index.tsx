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
import MainContentContext from "states/context/mainContentContext";

interface PropertyCardProps {
  information: IPropertyCard;
  onCardClick: () => void;
  onButtonClick?: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  information,
  onCardClick,
  onButtonClick,
}) => {
  const context = React.useContext(MainContentContext);

  const setOnButtonClick = (event: React.MouseEvent<any, MouseEvent>) => {
    event.stopPropagation();
    onButtonClick && onButtonClick(information._id);
  };

  const getButtonText = React.useMemo(() => {
    if (context.isContact) return "contacto";
    else if (context.isEdit) return "modificar";
    else if (context.isRemove) return "eliminar";
    return "";
  }, [context]);

  const getButtonColor = React.useMemo(() => {
    if (context.isContact) return "primary";
    else if (context.isEdit) return "success";
    else if (context.isRemove) return "danger";
    return "";
  }, [context]);

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
              {onButtonClick && (
                <MyButton
                  small
                  color={getButtonColor}
                  text={getButtonText}
                  onClick={setOnButtonClick}
                />
              )}
            </PropertyBodyRightCont>
          </PropertyBodyCont>
        </PropertyBody>
      </PropertyCardCont>
    </PropertyCardSpace>
  );
};

export default PropertyCard;
