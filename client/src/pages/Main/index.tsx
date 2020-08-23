import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import Header from "components/molecules/Header";
import HomeTitle from "components/organisms/HomeTitle";
import MainContent from "components/organisms/MainContent";

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <HomeTitle collapsed />
      <FrameContent>
        <MainContent />
      </FrameContent>
    </React.Fragment>
  );
};

export default Main;
