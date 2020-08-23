import * as React from "react";
import nextId from "react-id-generator";
import { Label, Input } from "reactstrap";

interface MyInputProps {
  label: string;
  type: any;
}

const MyInput: React.FC<MyInputProps> = ({
  label,
  type,
}) => {

  const key = React.useMemo(() => nextId(), []);
  var prueba;

  if(type == "select"){
    prueba = <Input type={type}>
    <option>Arriendo</option>
    <option>Venta</option>
    </Input>
  }else{
    prueba = <Input type={type}/>
  }

  return (
    <div>
      <Label>{label}</Label>      
      {prueba}
    </div>
  );
};

export default MyInput;
