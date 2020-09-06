import * as React from "react";
import { FrameContent } from "assets/styles/styledComponents";
import CreatePostForm from "components/organisms/CreatePost";

const EditPosts: React.FC = () => {
  return (
    <FrameContent>
      <CreatePostForm />
    </FrameContent>
  );
};

export default EditPosts;
