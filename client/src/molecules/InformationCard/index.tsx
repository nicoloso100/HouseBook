import * as React from "react";
import { Card, CardBody, Badge, Button } from "reactstrap";
import { InformationCardContainer } from "./styles";

interface InformationCardProps {
  theme: "primary" | "success" | "warning";
  title: string;
  text: string;
  tags: string[];
  buttonText: string;
  buttonAction: () => void;
}

const InformationCard: React.FC<InformationCardProps> = ({
  theme,
  title,
  text,
  tags,
  buttonText,
  buttonAction,
}) => {
  const setOnClick = (e: any) => {
    e.preventDefault();
    buttonAction();
  };

  return (
    <InformationCardContainer>
      <Card className="card-lift--hover shadow border-0">
        <CardBody className="py-5">
          <div
            className={`icon icon-shape icon-shape-${theme} rounded-circle mb-4`}
          >
            <i className="ni ni-check-bold" />
          </div>
          <h6 className={`text-${theme} text-uppercase`}>{title}</h6>
          <p className="description mt-3">{text}</p>
          <div>
            {tags.map((text: string) => {
              return (
                <Badge color={`${theme}`} pill className="mr-1">
                  {text}
                </Badge>
              );
            })}
          </div>
          <Button
            className="mt-4"
            color={`${theme}`}
            href="#pablo"
            onClick={setOnClick}
          >
            {buttonText}
          </Button>
        </CardBody>
      </Card>
    </InformationCardContainer>
  );
};

export default InformationCard;
