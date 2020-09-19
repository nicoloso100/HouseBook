import * as React from "react";
import NumberFormat from "react-number-format";
import { FormGroup, Input } from "reactstrap";
import { isInvalidNumber } from "utils";
import FormLabel from "../FormLabel";

interface MyNumberInputProps {
  defaultValue?: number;
  onChange: (value: number) => void;
  placeholder: string;
  thousandSeparator?: boolean;
  prefix?: string;
  suffix?: string;
  required?: boolean;
  label?: string;
}

const MyNumberInput: React.FC<MyNumberInputProps> = ({
  defaultValue,
  onChange,
  placeholder,
  thousandSeparator,
  prefix,
  suffix,
  required,
  label,
}) => {
  const [value, setValue] = React.useState<number | undefined>(undefined);
  const [invalid, setInvalid] = React.useState<boolean>(false);

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onBlur = () => {
    if (value) {
      onChange(value);
    }
    if (required) {
      setInvalid(isInvalidNumber(value));
    }
  };

  return (
    <>
      {label && <FormLabel required={required} text={label} />}
      <FormGroup className={invalid ? "has-danger" : ""}>
        <NumberFormat
          value={value}
          className="form-control-alternative"
          placeholder={placeholder}
          customInput={Input}
          thousandSeparator={thousandSeparator}
          prefix={prefix}
          suffix={suffix}
          onValueChange={(value) => setValue(value.floatValue as number)}
          onBlur={onBlur}
          autoComplete="off"
        />
      </FormGroup>
    </>
  );
};

export default MyNumberInput;
