import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import Header from "molecules/Header";
import HomeTitle from "organisms/HomeTitle";
import HomeFilters from "organisms/HomeFilters";
import HomeInformation from "organisms/HomeInformation";
import Footer from "molecules/Footer";

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
      <FrameContent>
        <HomeInformation />
        <Footer />
      </FrameContent>
    </React.Fragment>
  );
};

export default Home;
