import * as React from "react";
import { FormGroup, Input } from "reactstrap";
import { isNullOrEmpty } from "utils";

interface MyInputProps {
  defaultValue: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
}

const MyInput: React.FC<MyInputProps> = ({
  defaultValue,
  onChange,
  placeholder,
  required,
}) => {
  const [invalid, setInvalid] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onBlur = () => {
    onChange(value);
    if (required) {
      setInvalid(isNullOrEmpty(value));
    }
  };

  return (
    <FormGroup className={invalid ? "has-danger" : ""}>
      <Input
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        onBlur={onBlur}
        className="form-control-alternative"
        placeholder={placeholder}
        type="text"
        autoComplete="off"
      />
    </FormGroup>
  );
};

export default MyInput;
