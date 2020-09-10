import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import Header from "components/molecules/Header";
import HomeTitle from "components/organisms/HomeTitle";
import MainContent from "components/organisms/MainContent";
import { useLocation } from "react-router-dom";
import { defaultFilters } from "constants/filterConstants";
import MainContentContext, {
  defaultMainContentContext,
} from "states/context/mainContentContext";
import { GetFilteredPosts } from "actions/APICalls/postsActions";
import Footer from "components/molecules/Footer";

const Main: React.FC = () => {
  const [posts, setPosts] = React.useState<ISummaryPost[]>([]);
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

  const onFilter = (filter: IFilters) => {
    let type_of_sale: string[] = [];
    let filter1: BigObject<ITypes> = filter.filter1 as any;
    Object.keys(filter1).forEach((key) => {
      if (filter1[key].selected) type_of_sale.push(filter1[key].value);
    });

    let type_of_housing: string[] = [];
    let filter2: BigObject<ITypes> = filter.filter2 as any;
    Object.keys(filter2).forEach((key) => {
      if (filter2[key].selected) type_of_housing.push(filter2[key].value);
    });

    const filters: ISendFilters = {
      type_of_housing,
      type_of_sale,
    };
    GetFilteredPosts(filters).then((posts) => {
      setPosts(posts);
    });
  };

  React.useEffect(() => {
    onFilter(getDefaultFilter);
  }, [getDefaultFilter]);

  return (
    <React.Fragment>
      <Header />
      <HomeTitle collapsed />
      <FrameContent>
        <MainContentContext.Provider
          value={{ ...defaultMainContentContext, isContact: true }}
        >
          <MainContent
            defaultFilter={getDefaultFilter}
            posts={posts}
            onFilter={onFilter}
          />
        </MainContentContext.Provider>
      </FrameContent>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
