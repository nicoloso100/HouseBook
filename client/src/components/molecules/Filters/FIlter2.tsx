import * as React from "react";
import { FilterCont, FilterScroll } from "./styles";
import MySectionTitle from "components/atoms/MySectionTitle";
import MyCheckbox from "components/atoms/MyCheckbox";

interface Filter2Props {
  filter2: IFilter2;
  setFilter2: (filter2: IFilter2) => void;
}

const Filter2: React.FC<Filter2Props> = ({ filter2, setFilter2 }) => {
  const propertiesList = filter2 as any;

  const setProperty = (value: boolean, key: string) => {
    setFilter2({
      ...propertiesList,
      [key]: { ...propertiesList[key], selected: value },
    });
  };

  return (
    <FilterCont customFlex={1.5}>
      <MySectionTitle text="¿QUÉ TIPO DE INMUEBLE LE INTERESA?" />
      <FilterScroll>
        {Object.keys(propertiesList).map((key) => {
          return (
            <MyCheckbox
              key={key}
              label={propertiesList[key].label}
              checked={propertiesList[key].selected ?? false}
              onChange={(value: boolean) =>
                setProperty(value, propertiesList[key].value)
              }
            />
          );
        })}
      </FilterScroll>
    </FilterCont>
  );
};

export default Filter2;
