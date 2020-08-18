import * as React from "react";

interface MySectionTitlePros {
  text: string;
}

const MySectionTitle: React.FC<MySectionTitlePros> = ({ text }) => {
  return <h6>{text}</h6>;
};

export default MySectionTitle;
