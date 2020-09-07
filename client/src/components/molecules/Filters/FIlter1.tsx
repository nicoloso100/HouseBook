import * as React from "react";
import { FilterCont } from "./styles";
import MySectionTitle from "components/atoms/MySectionTitle";
import MyCheckbox from "components/atoms/MyCheckbox";

interface Filter1Props {
  filter1: IFilter1;
  setFilter1: (filter1: IFilter1) => void;
}

const Filter1: React.FC<Filter1Props> = ({ filter1, setFilter1 }) => {
  const salesTypes = filter1 as any;

  const setSaleType = (value: boolean, key: string) => {
    setFilter1({
      ...salesTypes,
      [key]: { ...salesTypes[key], selected: value },
    });
  };

  return (
    <FilterCont customFlex={1}>
      <MySectionTitle text="¿QUÉ DESEA BUSCAR?" />
      {Object.keys(salesTypes).map((key) => {
        return (
          <MyCheckbox
            key={key}
            label={salesTypes[key].label}
            checked={salesTypes[key].selected ?? false}
            onChange={(value: boolean) =>
              setSaleType(value, salesTypes[key].value)
            }
          />
        );
      })}
    </FilterCont>
  );
};

export default Filter1;
