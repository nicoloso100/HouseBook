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
import { Modal } from "reactstrap";
import CreatePostContext, {
  defaultCreatePostContext,
} from "states/context/createPostContext";
import CreatePostForm from "components/organisms/CreatePost";
import { defaultOpenModal } from "constants/userConstants";
import { GetPost } from "actions/APICalls/postsActions";

const EditPosts: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer);
  const [posts, setPosts] = React.useState<ISummaryPost[]>([]);
  const [openEdit, setOpenEdit] = React.useState<IOpenModal>(defaultOpenModal);

  React.useEffect(() => {
    if (user) {
      GetPosts(user._id).then((posts: ISummaryPost[]) => {
        setPosts(posts);
      });
    }
  }, [user]);

  const onCreatePost = (post: ICreatePost) => {
    if (user) {
      console.log(post);
      return undefined;
    }
  };

  const onCloseForm = () => {
    setOpenEdit(defaultOpenModal);
  };

  const onAction = (id: string) => {
    GetPost(id).then((post) => {
      setOpenEdit({
        open: true,
        value: post,
      });
    });
  };

  return (
    <FrameContent>
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={openEdit.open}
        toggle={onCloseForm}
      >
        <CreatePostContext.Provider
          value={{ ...defaultCreatePostContext, isEdit: true }}
        >
          <CreatePostForm
            onAction={onCreatePost}
            onClose={onCloseForm}
            defaultValues={openEdit.value}
          />
        </CreatePostContext.Provider>
      </Modal>
      <MainContentContext.Provider
        value={{ ...defaultMainContentContext, isEdit: true }}
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

export default EditPosts;
