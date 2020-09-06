import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import CreatePostForm from "components/organisms/CreatePost";
import { CreatePost } from "actions/APICalls/userActions";
import { useSelector } from "react-redux";
import { RootState } from "states";

const EditPosts: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  const onCreatePost = (post: IPost) => {
    if (user) {
      console.log(post);
      post.user_id = user._id;
      return CreatePost(post);
    }
  };

  return (
    <FrameContent>
      <CreatePostForm onCreatePost={onCreatePost} />
    </FrameContent>
  );
};

export default EditPosts;
