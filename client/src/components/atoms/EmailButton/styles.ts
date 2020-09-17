import styled from "styled-components";

export const EmailButtonCont = styled.div`
  min-height: 35px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #0072c6;
  display: flex;
  align-items: center;
  transition-duration: 0.2s;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 5px 0.5px rgba(156, 156, 156, 1);
  }
`;

export const EmailButtonIcon = styled.i`
  color: white;
  font-size: 20px;
  margin-right: 10px;
`;

export const EmailButtonText = styled.span`
  color: white;
  font-size: 14px;
`;
