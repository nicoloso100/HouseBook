import * as React from "react";
import { generalURLs } from "actions/APICalls/URLs";
import Crousel from "components/molecules/Carousel";
import {
  PostInformationCont,
  PostInformationCard,
  PostContactCard,
  PostCardBody,
  PostContactCardCont,
  PostCarditem,
} from "./styles";

interface PostInformationProps {
  information: IPost;
}
const PostInformation: React.FC<PostInformationProps> = ({ information }) => {
  const getImages = React.useMemo(() => {
    return information.images.map(
      (image) => `${generalURLs.downloadImage}/${image}`
    );
  }, [information]);

  return (
    <PostInformationCont>
      <PostInformationCard>
        <Crousel images={getImages} />
        <PostCardBody>
          <PostCarditem>
            <h1>{information.title}</h1>
          </PostCarditem>
          <PostCarditem>
            <p>{information.description}</p>
          </PostCarditem>
          <PostCarditem>
            <p>{information.city}</p>
          </PostCarditem>
          <PostCarditem>
            <p>{information.ubication}</p>
          </PostCarditem>
          <PostCarditem>
            <p>{information.neighborhood}</p>
          </PostCarditem>
          <PostCarditem>
            <p>{information.nearby_sites}</p>
          </PostCarditem>
          <PostCarditem>
            <p>{information.stratum}</p>
          </PostCarditem>
        </PostCardBody>
      </PostInformationCard>
      <PostContactCardCont>
        <PostContactCard></PostContactCard>
      </PostContactCardCont>
    </PostInformationCont>
  );
};

export default PostInformation;
