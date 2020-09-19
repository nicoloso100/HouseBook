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
  CustomBadge,
  PostInformationDivisor,
  PostInformationDivisorContent,
} from "./styles";
import MainContactCard from "components/molecules/MainContactCard";
import { formatMoney } from "utils";

interface PostInformationProps {
  information: IPost;
}
const PostInformation: React.FC<PostInformationProps> = ({ information }) => {
  const getImages = React.useMemo(() => {
    return information.images.map(
      (image) => `${generalURLs.downloadImage}/${image}`
    );
  }, [information]);

  const getContactInfo: IContact = React.useMemo(() => {
    return {
      email: information.email,
      phoneNumber: information.phone?.toString(),
      webSite: information.web_site,
      whatsApp: information.whatsapp?.toString(),
    };
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
            <CustomBadge color="info">{information.type_of_sale}</CustomBadge>
            <CustomBadge color="info">
              {information.type_of_housing}
            </CustomBadge>
          </PostCarditem>
          <PostInformationDivisor>
            <PostInformationDivisorContent>
              <PostCarditem>
                <strong>Precio</strong>
                <p>{formatMoney(information.price)}</p>
              </PostCarditem>
              <PostCarditem>
                <strong>Ciudad: </strong>
                <p>{information.city}</p>
              </PostCarditem>
              <PostCarditem>
                <strong>Barrio: </strong>
                <p>{information.neighborhood}</p>
              </PostCarditem>
              <PostCarditem>
                <strong>Dirección</strong>
                <p>{information.ubication}</p>
              </PostCarditem>
              <PostCarditem>
                <strong>Ubicada cerca de</strong>
                <p>{information.nearby_sites}</p>
              </PostCarditem>
              <PostCarditem>
                <strong>Estrato</strong>
                <p>{information.stratum}</p>
              </PostCarditem>
            </PostInformationDivisorContent>
            <PostInformationDivisorContent>
              <PostCarditem>
                <strong>Área</strong>
                <p>{information.dimensions} m²</p>
              </PostCarditem>
              <PostCarditem>
                <strong>Número de habitaciones</strong>
                <p>{information.rooms}</p>
              </PostCarditem>
              <PostCarditem>
                <strong>Número de baños</strong>
                <p>{information.bathrooms}</p>
              </PostCarditem>
              <PostCarditem>
                <strong>Número de parqueaderos</strong>
                <p>{information.parkings}</p>
              </PostCarditem>
              <PostCarditem>
                <strong>Antiguedad</strong>
                <p>{information.antiquity} años</p>
              </PostCarditem>
            </PostInformationDivisorContent>
          </PostInformationDivisor>
        </PostCardBody>
      </PostInformationCard>
      <PostContactCardCont>
        <PostContactCard>
          <MainContactCard contactInfo={getContactInfo} />
        </PostContactCard>
      </PostContactCardCont>
    </PostInformationCont>
  );
};

export default PostInformation;
