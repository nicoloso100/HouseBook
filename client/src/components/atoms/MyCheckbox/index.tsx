import * as React from "react";
import nextId from "react-id-generator";

interface MyCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (selected: boolean) => void;
}

const MyCheckbox: React.FC<MyCheckboxProps> = ({
  checked,
  onChange,
  label,
}) => {
  const handleChange = (event: any) => {
    onChange(event.target.checked);
  };

  const key = React.useMemo(() => nextId(), []);

  return (
    <div className="custom-control custom-checkbox mb-3">
      <input
        className="custom-control-input"
        id={key}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label
        style={{ userSelect: "none" }}
        className="custom-control-label"
        htmlFor={key}
      >
        {label}
      </label>
    </div>
  );
};

export default MyCheckbox;
