import styled from "styled-components";

export const FilterCont = styled.div<{ customFlex: number }>`
  flex: ${(props) => props.customFlex};
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const FilterScroll = styled.div`
  padding: 5px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const FilterSearchContainer = styled.div`
  display: flex;
`;

export const FilterSearchContainerSpacer = styled.div`
  width: 20px;
`;
