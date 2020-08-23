import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import Header from "components/molecules/Header";
import HomeTitle from "components/organisms/HomeTitle";
import HomeFilters from "components/organisms/HomeFilters";
import HomeInformation from "components/organisms/HomeInformation";
import Footer from "components/molecules/Footer";

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
