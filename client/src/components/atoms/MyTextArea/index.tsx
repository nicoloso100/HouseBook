import * as React from "react";
import { Input } from "reactstrap";

interface MyTextAreaProps {
  defaultValue: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const MyTextArea: React.FC<MyTextAreaProps> = ({
  defaultValue,
  onChange,
  placeholder,
}) => {
  const [innerValue, setInnerValue] = React.useState<string>("");

  React.useEffect(() => {
    setInnerValue(defaultValue);
  }, [defaultValue]);

  return (
    <Input
      value={innerValue}
      onChange={(evt) => setInnerValue(evt.target.value)}
      onBlur={() => onChange(innerValue)}
      className="form-control-alternative"
      placeholder={placeholder}
      autoComplete="off"
      rows="4"
      type="textarea"
    />
  );
};

export default MyTextArea;
