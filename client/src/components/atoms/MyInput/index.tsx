import * as React from "react";
import { FormGroup, Input } from "reactstrap";
import { isNullOrEmpty } from "utils";
import FormLabel from "../FormLabel";

interface MyInputProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  onNonRequiredChange?: (value?: string) => void;
  placeholder: string;
  required?: boolean;
  label?: string;
}

const MyInput: React.FC<MyInputProps> = ({
  defaultValue,
  onChange,
  onNonRequiredChange,
  placeholder,
  required,
  label,
}) => {
  const [invalid, setInvalid] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const onBlur = () => {
    if (required && onChange) {
      setInvalid(isNullOrEmpty(value));
      onChange(value);
    } else if (onNonRequiredChange) {
      onNonRequiredChange(isNullOrEmpty(value) ? undefined : value);
    }
  };

  return (
    <>
      {label && <FormLabel required={required} text={label} />}
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
    </>
  );
};

export default MyInput;
