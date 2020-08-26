import * as React from "react";

interface MySectionTitlePros {
  text: string;
}

const MySectionTitle: React.FC<MySectionTitlePros> = ({ text }) => {
  return <h5>{text}</h5>;
};

export default MySectionTitle;
