import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import MainContent from "components/organisms/MainContent";
import { defaultFilters } from "constants/filterConstants";
import MainContentContext, {
  defaultMainContentContext,
} from "states/context/mainContentContext";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { GetPosts } from "actions/APICalls/userActions";

const EditPosts: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer);
  const [posts, setPosts] = React.useState<ISummaryPost[]>([]);

  React.useEffect(() => {
    if (user) {
      GetPosts(user._id).then((posts: ISummaryPost[]) => {
        setPosts(posts);
      });
    }
  }, [user]);

  return (
    <FrameContent>
      <MainContentContext.Provider
        value={{ ...defaultMainContentContext, isEdit: true }}
      >
        <MainContent isEdit defaultFilter={defaultFilters} posts={posts} />
      </MainContentContext.Provider>
    </FrameContent>
  );
};

export default EditPosts;
