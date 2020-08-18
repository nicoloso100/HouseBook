import * as React from "react";
import { FilterCont } from "./styles";
import MySectionTitle from "atoms/MySectionTitle";
import MyCheckbox from "atoms/MyCheckbox";

interface Filter1Props {
  filter1: IFilter1;
  setFilter1: (filter1: IFilter1) => void;
}

const Filter1: React.FC<Filter1Props> = ({ filter1, setFilter1 }) => {
  const setVenta = (value: boolean) => setFilter1({ ...filter1, venta: value });

  const setArriendo = (value: boolean) =>
    setFilter1({ ...filter1, arriendo: value });

  return (
    <FilterCont customFlex={1}>
      <MySectionTitle text="¿QUÉ DESEA BUSCAR?" />
      <MyCheckbox label="Venta" checked={filter1.venta} onChange={setVenta} />
      <MyCheckbox
        label="Arriendo"
        checked={filter1.arriendo}
        onChange={setArriendo}
      />
    </FilterCont>
  );
};

export default Filter1;
