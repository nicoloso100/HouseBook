import * as React from "react";
import { Button } from "reactstrap";

interface MyButtonProps {
  text: string;
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={() => onClick()} color="primary" type="button">
      {text}
    </Button>
  );
};

export default MyButton;
