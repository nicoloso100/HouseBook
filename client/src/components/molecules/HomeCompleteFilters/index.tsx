import * as React from "react";
import { HomeFiltersContainer } from "./styles";
import Filter1 from "components/molecules/Filters/FIlter1";
import Filter2 from "components/molecules/Filters/FIlter2";
import Filter3 from "components/molecules/Filters/Filter3";
import { defaultFilters } from "constants/filterConstants";

interface HomeFiltersProps {
  defaultFilter: IFilters;
  onFilter: (fitlers: IFilters) => void;
}

const HomeCompleteFilters: React.FC<HomeFiltersProps> = ({
  onFilter,
  defaultFilter,
}) => {
  const [filter, setFilter] = React.useState<IFilters>(defaultFilters);

  React.useEffect(() => {
    setFilter(defaultFilter);
  }, [defaultFilter]);

  const setOnFilter = () => {
    onFilter(filter);
  };

  const setFilter1 = (filter1: IFilter1) => {
    setFilter((filter) => ({ ...filter, filter1 }));
  };

  const setFilter2 = (filter2: IFilter2) => {
    setFilter((filter) => ({ ...filter, filter2 }));
  };

  const setFilter3 = (filter3: IFilter3) => {
    setFilter((filter) => ({ ...filter, filter3 }));
  };

  return (
    <HomeFiltersContainer>
      <Filter3
        filter3={filter.filter3}
        setFilter3={setFilter3}
        onSearch={setOnFilter}
      />
      <Filter2 filter2={filter.filter2} setFilter2={setFilter2} />
      <Filter1 filter1={filter.filter1} setFilter1={setFilter1} />
    </HomeFiltersContainer>
  );
};

export default HomeCompleteFilters;
