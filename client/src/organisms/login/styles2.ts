import styled from "styled-components";

import Background from "assets/images/background/5.png";

export const BackgroundLogin = styled.div`  
  background: url(${Background}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 0;
  min-height: 100vh;
`;

export const ContForm = styled.div`
    margin: 4vh;
    min-height: 47vh;
    width: 95%;
    display: flexbox;
    background-color: red;
`;