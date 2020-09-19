import * as React from "react";
import NumberFormat from "react-number-format";
import { FormGroup, Input } from "reactstrap";
import { isInvalidNumber } from "utils";
import FormLabel from "../FormLabel";

interface MyPhoneInputProps {
  defaultValue?: number;
  onChange?: (value: number) => void;
  onNonRequiredChange?: (value?: number) => void;
  placeholder: string;
  required?: boolean;
  label?: string;
  freeFormat?: boolean;
}

const MyPhoneInput: React.FC<MyPhoneInputProps> = ({
  defaultValue,
  onChange,
  onNonRequiredChange,
  placeholder,
  required,
  label,
  freeFormat,
}) => {
  const [value, setValue] = React.useState<number | undefined>(undefined);
  const [invalid, setInvalid] = React.useState<boolean>(false);

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onBlur = () => {
    if (required && onChange) {
      setInvalid(isInvalidNumber(value));
      if (value) {
        onChange(value);
      }
    } else if (onNonRequiredChange) {
      onNonRequiredChange(value);
    }
  };

  return (
    <FormGroup className={invalid ? "has-danger" : ""}>
      {label && <FormLabel required={required} text={label} />}
      <NumberFormat
        value={value}
        className="form-control-alternative"
        placeholder={placeholder}
        customInput={Input}
        onValueChange={(value) => setValue(value.floatValue as number)}
        onBlur={onBlur}
        autoComplete="off"
        allowEmptyFormatting
        format={freeFormat ? undefined : "+57 (###) ###-####"}
        mask={freeFormat ? undefined : "_"}
      />
    </FormGroup>
  );
};

export default MyPhoneInput;
