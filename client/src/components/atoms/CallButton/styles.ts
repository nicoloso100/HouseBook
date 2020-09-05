import styled from "styled-components";

export const CallButtonCont = styled.div`
  min-height: 35px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  transition-duration: 0.2s;
  :hover {
    box-shadow: 0px 0px 5px 0.5px rgba(156, 156, 156, 1);
  }
`;

export const CallButtonIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
`;

export const CallButtonText = styled.span`
  font-size: 14px;
`;
