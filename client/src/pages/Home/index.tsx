import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import Header from "components/molecules/Header";
import HomeTitle from "components/organisms/HomeTitle";
import HomeInformation from "components/organisms/HomeInformation";
import Footer from "components/molecules/Footer";
import HomeFilters from "components/molecules/HomeFilters";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  let history = useHistory();

  const onFilter = (filters: IFilters) => {
    history.push({ pathname: "/main", state: { filters } });
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
      </FrameContent>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
