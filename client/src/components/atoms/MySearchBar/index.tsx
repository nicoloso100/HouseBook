import * as React from "react";
import { Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";

interface MySearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps: any;
  placeholder?: string;
}

const MySearchBar: React.FC<MySearchBarProps> = ({
  value,
  onChange,
  inputProps,
  placeholder,
}) => {
  return (
    <InputGroup className="input-group-alternative">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="ni ni-zoom-split-in" />
        </InputGroupText>
      </InputGroupAddon>
      <Input
        {...inputProps}
        className="form-control-alternative"
        placeholder={placeholder ?? "Escriba para filtrar"}
        type="text"
        value={value}
        onChange={onChange}
        autoComplete="no"
      />
    </InputGroup>
  );
};

export default MySearchBar;
