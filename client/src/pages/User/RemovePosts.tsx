import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import MainContent from "components/organisms/MainContent";
import { defaultFilters } from "constants/filterConstants";
import MainContentContext, {
  defaultMainContentContext,
} from "states/context/mainContentContext";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { GetPosts, RemovePost } from "actions/APICalls/userActions";
import ConfirmationAlert from "utils/confirmationAlert";
import { useToasts } from "react-toast-notifications";

const RemovePosts: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer);
  const [posts, setPosts] = React.useState<ISummaryPost[]>([]);

  const { addToast } = useToasts();

  const getPosts = (id: string) => {
    GetPosts(id).then((posts: ISummaryPost[]) => {
      setPosts(posts);
    });
  };

  React.useEffect(() => {
    if (user) {
      getPosts(user._id);
    }
  }, [user]);

  const onAction = (id: string) => {
    if (user) {
      ConfirmationAlert.show(
        "¿Está seguro que desea eliminar la publicación?",
        () => {
          RemovePost(id).then(() => {
            getPosts(user._id);
            addToast("La publicación se ha eliminado exitosamente.", {
              appearance: "success",
            });
          });
        }
      );
    }
  };

  return (
    <FrameContent>
      <MainContentContext.Provider
        value={{ ...defaultMainContentContext, isRemove: true }}
      >
        <MainContent
          isEdit
          defaultFilter={defaultFilters}
          posts={posts}
          onAction={onAction}
        />
      </MainContentContext.Provider>
    </FrameContent>
  );
};

export default RemovePosts;
