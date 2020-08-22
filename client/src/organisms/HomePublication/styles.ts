import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 40vw;
  border:0.5px solid #ccc;
  border-radius:10px;
  overflow:hidden;
`;

export const HomeTitleText = styled.div`
  text-align:center;
  color: white;
  font-size: 56px;
  font-weight: 100;
  font-family: "Poiret One", cursive;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  background-color: #e3bb2b;
`;

export const HomeSubTitle = styled.span`
  color: white;
  font-size: 34px;
  font-weight: 100;
  font-family: "Actor", sans-serif;
`;

export const HomeTitleCont = styled.div`
  display: flex;
  flex-direction: column;
`;
