import * as React from "react";
import Singin from "molecules/Singin/index";
import Singup from "molecules/Singup/index";

import {
  ContSingin,
  Icon,
  Form
} from "./styles";

interface ContFormProps {
  icon: string;
  form: string;
}

const ContForm: React.FC<ContFormProps> = ({
  icon,
  form
}) => {
  if (form == "singin"){
    return (
      <ContSingin>
        <Icon className={icon}/>
        <Form>
          <Singin/>
        </Form>
      </ContSingin>
    );
  }else{
    return (
      <ContSingin>
        <Form>
          <Singup/>
        </Form>
        <Icon className={icon}/>
      </ContSingin>
    );
  }
};

export default ContForm;
