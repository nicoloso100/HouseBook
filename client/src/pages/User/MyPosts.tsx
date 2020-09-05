import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import MainContent from "components/organisms/MainContent";
import { defaultFilters } from "constants/filterConstants";

const MyPosts: React.FC = () => {
  return (
    <FrameContent>
      <MainContent isEdit defaultFilter={defaultFilters} />
    </FrameContent>
  );
};

export default MyPosts;
