import styled from "styled-components";
import { device } from "utils/responsiveTemplate";

export const FrameContent = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  @media ${device.mobile} {
    height: 100%;
  }
`;
