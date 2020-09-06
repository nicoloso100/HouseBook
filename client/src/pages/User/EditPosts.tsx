import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import MainContent from "components/organisms/MainContent";
import { defaultFilters } from "constants/filterConstants";
import MainContentContext, {
  defaultMainContentContext,
} from "states/context/mainContentContext";

const EditPosts: React.FC = () => {
  return (
    <FrameContent>
      <MainContentContext.Provider
        value={{ ...defaultMainContentContext, isEdit: true }}
      >
        <MainContent isEdit defaultFilter={defaultFilters} />
      </MainContentContext.Provider>
    </FrameContent>
  );
};

export default EditPosts;
