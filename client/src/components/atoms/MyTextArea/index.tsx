import * as React from "react";
import { FormGroup, Input } from "reactstrap";
import { isNullOrEmpty } from "utils";
import FormLabel from "../FormLabel";

interface MyTextAreaProps {
  defaultValue: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  label?: string;
}

const MyTextArea: React.FC<MyTextAreaProps> = ({
  defaultValue,
  onChange,
  placeholder,
  required,
  label,
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
      {label && <FormLabel required={required} text={label} />}
      <Input
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        onBlur={onBlur}
        className="form-control-alternative"
        placeholder={placeholder}
        autoComplete="off"
        rows="4"
        type="textarea"
      />
    </FormGroup>
  );
};

export default MyTextArea;
