import { Badge } from "reactstrap";
import styled from "styled-components";
import { device } from "utils/responsiveTemplate";

export const PostInformationCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    padding: 20px;
    flex-direction: column-reverse;
  }
`;

export const CustomBadge = styled(Badge)`
  margin-right: 10px;
`;

export const PostInformationDivisor = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PostInformationDivisorContent = styled.div`
  flex: 1;
`;

export const PostInformationCard = styled.div`
  flex: 3;
  margin: 20px;
  width: 100%;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);

  @media ${device.mobile} {
    margin: 20px 0px 20px 0px;
  }
`;

export const PostContactCardCont = styled.div`
  flex: 1;
  margin: 20px;
  display: block;
  @media ${device.mobile} {
    margin: 20px 0px 20px 0px;
  }
`;

export const PostContactCard = styled.div`
  padding: 20px;
  min-height: 200px;
  min-width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);
`;

export const PostCardBody = styled.div`
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const PostCarditem = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
