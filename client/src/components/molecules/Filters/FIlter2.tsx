import * as React from "react";
import { FilterCont, FilterScroll } from "./styles";
import MySectionTitle from "components/atoms/MySectionTitle";
import MyCheckbox from "components/atoms/MyCheckbox";

interface Filter2Props {
  filter2: IFilter2;
  setFilter2: (filter2: IFilter2) => void;
}

const Filter2: React.FC<Filter2Props> = ({ filter2, setFilter2 }) => {
  const setCasas = (value: boolean) => setFilter2({ ...filter2, casas: value });
  const setApartamentos = (value: boolean) =>
    setFilter2({ ...filter2, apartamentos: value });
  const setOficinas = (value: boolean) =>
    setFilter2({ ...filter2, oficinas: value });
  const setBodegas = (value: boolean) =>
    setFilter2({ ...filter2, bodegas: value });
  const setLocales = (value: boolean) =>
    setFilter2({ ...filter2, locales: value });
  const setFincas = (value: boolean) =>
    setFilter2({ ...filter2, fincas: value });
  const setOtros = (value: boolean) => setFilter2({ ...filter2, otros: value });

  return (
    <FilterCont customFlex={1.5}>
      <MySectionTitle text="¿QUÉ TIPO DE INMUEBLE LE INTERESA?" />
      <FilterScroll>
        <MyCheckbox label="Casas" checked={filter2.casas} onChange={setCasas} />
        <MyCheckbox
          label="Apartamentos"
          checked={filter2.apartamentos}
          onChange={setApartamentos}
        />
        <MyCheckbox
          label="Oficinas"
          checked={filter2.oficinas}
          onChange={setOficinas}
        />
        <MyCheckbox
          label="Bodegas"
          checked={filter2.bodegas}
          onChange={setBodegas}
        />
        <MyCheckbox
          label="Locales"
          checked={filter2.locales}
          onChange={setLocales}
        />
        <MyCheckbox
          label="Fincas"
          checked={filter2.fincas}
          onChange={setFincas}
        />
        <MyCheckbox label="Otros" checked={filter2.otros} onChange={setOtros} />
      </FilterScroll>
    </FilterCont>
  );
};

export default Filter2;
