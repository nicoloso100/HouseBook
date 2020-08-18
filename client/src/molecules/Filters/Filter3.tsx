import * as React from "react";
import {
  FilterCont,
  FilterSearchContainer,
  FilterSearchContainerSpacer,
} from "./styles";
import MySectionTitle from "atoms/MySectionTitle";
import MyButton from "atoms/MyButton";
import MyAutosuggest from "atoms/MyAutosuggest";

interface Filter3Props {
  filter3: IFilter3;
  setFilter3: (filter3: IFilter3) => void;
  onSearch: () => void;
}

const Filter3: React.FC<Filter3Props> = ({ filter3, setFilter3, onSearch }) => {
  const setCiudad = (value: string) =>
    setFilter3({ ...filter3, ciudad: value });

  return (
    <FilterCont customFlex={2}>
      <MySectionTitle text="¿EN QUÉ CIUDAD BUSCA SU INMUEBLE?" />
      <FilterSearchContainer>
        <MyAutosuggest APIURL="" value={filter3.ciudad} onChange={setCiudad} />
        <FilterSearchContainerSpacer />
        <MyButton onClick={onSearch} text="Buscar" />
      </FilterSearchContainer>
    </FilterCont>
  );
};

export default Filter3;
