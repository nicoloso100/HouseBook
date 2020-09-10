import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { ViewPostCont } from "./styles";
import { isNullOrEmpty } from "utils";
import { GetPost } from "actions/APICalls/postsActions";
import Header from "components/molecules/Header";
import PostInformation from "components/organisms/PostInformation";
import HomeTitle from "components/organisms/HomeTitle";
import Footer from "components/molecules/Footer";

const ViewPost: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();

  const [post, setPost] = React.useState<IPost | null>(null);

  React.useEffect(() => {
    if (isNullOrEmpty(id)) {
      history.push("/");
    }
  }, [history, id]);

  React.useEffect(() => {
    GetPost(id).then((post) => {
      setPost(post);
    });
  }, [id]);

  return (
    <React.Fragment>
      <ViewPostCont>
        <Header />
        <HomeTitle collapsed />
        {post !== null && <PostInformation information={post} />}
      </ViewPostCont>
      <Footer />
    </React.Fragment>
  );
};

export default ViewPost;
