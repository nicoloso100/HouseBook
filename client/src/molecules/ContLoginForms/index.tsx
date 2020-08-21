import * as React from "react";
import {
  ContForm
} from "./styles";
import FormSingin from "molecules/ContForm/index";

const ContLoginForms = () => {
  return (
    <ContForm>
      <FormSingin icon={'ni ni-single-02'} form={'singin'}/>
      <FormSingin icon={'ni ni-badge'} form={'singup'}/>
    </ContForm>
  );
};

export default ContLoginForms;