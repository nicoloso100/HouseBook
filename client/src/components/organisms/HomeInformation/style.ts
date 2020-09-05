import styled from "styled-components";
import { device } from "utils/responsiveTemplate";

export const HomeInformationContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const HomeInfoLeftSide = styled.div`
  flex: 2;
  padding: 15px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.mobile} {
    min-width: 100%;
  }
`;

export const HomeInfoLeftSideTitle = styled.h4`
  text-align: center;
`;

export const HomeInfoLeftSideCardsCont = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const HomeInfoRightSide = styled.div`
  flex: 1;
  min-width: 600px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.mobile} {
    min-width: 100%;
  }
`;

export const HomeInfoRightSideTitle = styled.h6`
  text-align: center;
  margin-bottom: 10px;
`;
