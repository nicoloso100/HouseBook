import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import Header from "molecules/Header";
import HomeTitle from "organisms/HomeTitle";
import HomeFilters from "organisms/HomeFilters";

const Home = () => {
  return (
    <React.Fragment>
      <FrameContent>
        <Header />
        <HomeTitle />
        <HomeFilters />
      </FrameContent>
      <FrameContent></FrameContent>
    </React.Fragment>
  );
};

export default Home;
