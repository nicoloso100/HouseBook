import styled from "styled-components";

export const WebButtonCont = styled.div`
  min-height: 35px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #ff834c;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition-duration: 0.2s;
  :hover {
    box-shadow: 0px 0px 5px 0.5px rgba(156, 156, 156, 1);
  }
`;

export const WebButtonIcon = styled.i`
  color: white;
  font-size: 20px;
  margin-right: 10px;
`;

export const WebButtonText = styled.span`
  color: white;
  font-size: 14px;
`;
