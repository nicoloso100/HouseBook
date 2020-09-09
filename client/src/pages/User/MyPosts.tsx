import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import MainContent from "components/organisms/MainContent";
import { defaultFilters } from "constants/filterConstants";
import MainContentContext, {
  defaultMainContentContext,
} from "states/context/mainContentContext";
import { GetPosts } from "actions/APICalls/userActions";
import { RootState } from "states";
import { useSelector } from "react-redux";

const MyPosts: React.FC = () => {
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
        value={{ ...defaultMainContentContext, isShow: true }}
      >
        <MainContent isEdit defaultFilter={defaultFilters} posts={posts} />
      </MainContentContext.Provider>
    </FrameContent>
  );
};

export default MyPosts;
