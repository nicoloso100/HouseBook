import styled from "styled-components";

export const NavigationHeaderCont = styled.div`
  width: 100%;
  height: 75px;
  background-color: hsla(0, 0%, 0%, 0.26);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

export const NavigationHeaderButton = styled.span`
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  font-family: "Actor", sans-serif;
  cursor: pointer;
  transition-duration: 0.2s;
  :hover {
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  }
`;

export const NavigationHeaderButtonsCont = styled.div`
  display: flex;
  margin-right: 15px;
`;
