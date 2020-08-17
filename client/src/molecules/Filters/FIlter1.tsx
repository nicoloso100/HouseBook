import * as React from "react";
import { FilterCont } from "./styles";

const Filter1 = () => {
  return (
    <FilterCont>
      <h6>¿QUÉ DESEA BUSCAR?</h6>
      <div className="custom-control custom-checkbox mb-3">
        <input
          className="custom-control-input"
          id="customCheck1"
          type="checkbox"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Venta
        </label>
      </div>
      <div className="custom-control custom-checkbox mb-3">
        <input
          className="custom-control-input"
          defaultChecked
          id="customCheck2"
          type="checkbox"
        />
        <label className="custom-control-label" htmlFor="customCheck2">
          Arriendo
        </label>
      </div>
    </FilterCont>
  );
};

export default Filter1;
