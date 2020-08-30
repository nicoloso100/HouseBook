import styled from "styled-components";

export const LogoCont = styled.img<{ mycursor: string }>`
  width: 60px;
  height: 60px;
  cursor: ${(props) => props.mycursor};
`;

export const LogoConNombreCont = styled.img`
  width: 40%;
`;
