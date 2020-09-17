import * as React from "react";
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormGroup,
} from "reactstrap";
import { isNullOrEmpty } from "utils";

interface MySearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps: any;
  placeholder?: string;
  withoutMargin?: boolean;
}

const MySearchBar: React.FC<MySearchBarProps> = ({
  value,
  onChange,
  inputProps,
  placeholder,
  withoutMargin,
}) => {
  const [invalid, setInvalid] = React.useState<boolean>(false);

  const onBlurCallback = (backValue: string) => {
    if (inputProps.required) {
      setInvalid(isNullOrEmpty(backValue));
    }
  };

  return (
    <FormGroup
      className={invalid ? "has-danger" : ""}
      style={withoutMargin ? { margin: 0 } : {}}
    >
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
          onBlur={() => inputProps.onBlur(onBlurCallback)}
          autoComplete="no"
        />
      </InputGroup>
    </FormGroup>
  );
};

export default MySearchBar;
