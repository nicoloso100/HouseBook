import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import Header from "molecules/Header";
import HomeTitle from "organisms/HomeTitle";
import HomeFilters from "organisms/HomeFilters";

const Home = () => {
  const onFilter = (filters: IFilters) => {
    console.log(filters);
  };

  return (
    <React.Fragment>
      <FrameContent>
        <Header />
        <HomeTitle />
        <HomeFilters onFilter={onFilter} />
      </FrameContent>
      <FrameContent></FrameContent>
    </React.Fragment>
  );
};

export default Home;
