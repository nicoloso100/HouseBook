import * as React from "react";
import CreatePostForm from "components/organisms/CreatePost";
import { CreatePost } from "actions/APICalls/userActions";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { UploadImages } from "actions/APICalls/generalActions";

const EditPosts: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  const onCreatePost = (post: ICreatePost) => {
    if (user) {
      var form_data = new FormData();
      post.images.forEach((file) => {
        form_data.append("file", file);
      });
      return UploadImages(form_data).then((images) => {
        const sendPost: ISendPost = {
          ...post,
          user_id: user._id,
          images: images,
          thumbnail: images[0],
        };
        return CreatePost(sendPost);
      });
    }
  };

  return <CreatePostForm onCreatePost={onCreatePost} />;
};

export default EditPosts;
