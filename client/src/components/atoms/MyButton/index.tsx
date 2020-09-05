import * as React from "react";
import { Button } from "reactstrap";

interface MyButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<any, MouseEvent>) => void;
  small?: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick, small }) => {
  return (
    <Button
      onClick={(event) => onClick(event)}
      color="primary"
      type="button"
      size={small ? "sm" : "md"}
    >
      {text}
    </Button>
  );
};

export default MyButton;
