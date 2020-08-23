import styled from "styled-components";
import { device } from "utils/responsiveTemplate";

export const HomeFiltersContainer = styled.div`
  width: 100%;
  flex: 1;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  align-self: center;
  overflow: hidden;
  @media ${device.mobile} {
    flex-direction: column;
    padding-bottom: 20px;
  }
`;
