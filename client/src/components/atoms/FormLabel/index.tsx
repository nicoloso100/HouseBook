import * as React from "react";
import { FormLabelContainer, FormLabelRequired, FormLabelText } from "./styles";

interface FormLabelProps {
  text: string;
  required?: boolean;
}

const FormLabel: React.FC<FormLabelProps> = ({ text, required }) => {
  return (
    <FormLabelContainer>
      {required && <FormLabelRequired>*</FormLabelRequired>}
      <FormLabelText>{text}</FormLabelText>
    </FormLabelContainer>
  );
};

export default FormLabel;
