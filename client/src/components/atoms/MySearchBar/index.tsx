import * as React from "react";
import { Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";

interface MySearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps: any;
}

const MySearchBar: React.FC<MySearchBarProps> = ({
  value,
  onChange,
  inputProps,
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
        placeholder="Escriba para filtrar"
        type="text"
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default MySearchBar;
