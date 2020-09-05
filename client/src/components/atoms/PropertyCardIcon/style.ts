import styled from "styled-components";

export const PropertyCardIconCont = styled.div<{ separator: string }>`
  color: #393f49;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: ${(props) => props.separator};
`;

export const PropertyCardIconLabel = styled.span`
  font-size: 14px;
`;
