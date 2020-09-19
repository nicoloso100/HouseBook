import styled from "styled-components";

export const WhatsappButtonCont = styled.div`
  min-height: 45px;
  padding: 5px;
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 5px;
  background-color: #00bb2d;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition-duration: 0.2s;
  :hover {
    box-shadow: 0px 0px 5px 0.5px rgba(156, 156, 156, 1);
  }
`;

export const WhatsappButtonIcon = styled.i`
  color: white;
  font-size: 20px;
  margin-right: 10px;
`;

export const WhatsappButtonText = styled.span`
  color: white;
  font-size: 14px;
`;
