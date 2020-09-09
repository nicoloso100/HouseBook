import styled from "styled-components";
import { device } from "utils/responsiveTemplate";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 2;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  max-width: 50vh;
  flex: 1;
  height: 100vh;
  @media ${device.mobile} {
    display: none;
  }
`;
