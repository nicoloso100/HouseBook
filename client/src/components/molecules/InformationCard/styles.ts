import styled from "styled-components";
import { Container } from "reactstrap";
import { device } from "utils/responsiveTemplate";

export const InformationCardContainer = styled(Container)`
  max-width: 400px;
  @media ${device.mobile} {
    margin-top: 10px;
  }
`;
