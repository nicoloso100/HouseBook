import * as React from "react";
import { NoDataCont, NoDataContent, NoDataLabel, NoDataIcon } from "./style";

const NoDataComponent = () => {
  return (
    <NoDataCont>
      <NoDataContent>
        <NoDataIcon className="fa fa-database"></NoDataIcon>
        <NoDataLabel>No se han encontrado registros</NoDataLabel>
      </NoDataContent>
    </NoDataCont>
  );
};

export default NoDataComponent;
