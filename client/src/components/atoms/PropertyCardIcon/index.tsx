import * as React from "react";
import { PropertyCardIconCont, PropertyCardIconLabel } from "./style";

interface PropertyCardIconProps {
  icon: string;
  value: number | string;
  withSeparator?: boolean;
}

const PropertyCardIcon: React.FC<PropertyCardIconProps> = ({
  icon,
  value,
  withSeparator,
}) => {
  return (
    <PropertyCardIconCont separator={withSeparator ? "1px solid #5A626E" : "0"}>
      <i className={icon}></i>
      <PropertyCardIconLabel>{value}</PropertyCardIconLabel>
    </PropertyCardIconCont>
  );
};

export default PropertyCardIcon;
