import * as React from "react";
import { FormGroup, Input } from "reactstrap";
import { isNullOrEmpty } from "utils";
import FormLabel from "../FormLabel";

interface MySelectProps {
  defaultValue?: string;
  onChange: (value: string) => void;
  defaultOption?: string;
  options: ISelectOption[];
  required?: boolean;
  label?: string;
}

const MySelect: React.FC<MySelectProps> = ({
  defaultValue,
  onChange,
  defaultOption,
  options,
  required,
  label,
}) => {
  const [invalid, setInvalid] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (required && selected !== null) {
      setInvalid(isNullOrEmpty(selected));
    }
  }, [selected, required]);

  React.useEffect(() => {
    if (defaultValue) {
      setSelected(defaultValue);
    }
  }, [defaultValue]);

  const onSelect = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(evt.target.value);
    onChange(evt.target.value);
  };

  return (
    <>
      {label && <FormLabel required={required} text={label} />}
      <FormGroup className={invalid ? "has-danger" : ""}>
        <Input
          type="select"
          className={`form-control-alternative`}
          value={selected !== null ? selected : ""}
          onChange={onSelect}
        >
          {defaultOption && <option value={""}>{defaultOption}</option>}
          {options.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </Input>
      </FormGroup>
    </>
  );
};

export default MySelect;
