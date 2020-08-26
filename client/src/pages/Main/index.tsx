import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import Header from "components/molecules/Header";
import HomeTitle from "components/organisms/HomeTitle";
import MainContent from "components/organisms/MainContent";
import { useLocation } from "react-router-dom";
import { defaultFilters } from "constants/filterConstants";

const Main: React.FC = () => {
  let location = useLocation();

  const getDefaultFilter = React.useMemo(() => {
    let filters = defaultFilters;
    const state = location.state as any;
    if (state && state !== null) {
      const locationFilters = state.filters as IFilters;
      filters = locationFilters;
    }
    return filters;
  }, [location]);

  return (
    <React.Fragment>
      <Header />
      <HomeTitle collapsed />
      <FrameContent>
        <MainContent defaultFilter={getDefaultFilter} />
      </FrameContent>
    </React.Fragment>
  );
};

export default Main;
