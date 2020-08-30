import styled from "styled-components";
import { device } from "utils/responsiveTemplate";

export const MainContentCont = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  padding: 1%;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const MainFilterPanel = styled.div`
  flex: 1;
  display: flex;
  min-width: 350px;
  max-width: 480px;
`;

export const MainFilterList = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const MainLineSeparator = styled.div`
  width: 2px;
  border-radius: 10px;
  background-color: #a9a9a9;
  height: 95%;
  align-self: center;
`;

export const MainFilterListCont = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: auto;
  align-content: flex-start;
  justify-content: space-evenly;
`;
export const MainFilterListPagination = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
`;
