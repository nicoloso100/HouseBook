import styled from "styled-components";

export const ContSingin = styled.div`
    display: flex;
    min-height: 45vh;
    background-color: #00000050;
    border-radius: 1vh;
    animation: 2s tRight 1;
    transition-duration: 0.5s;
    width:25%;
    margin-left:1%;
    margin-right:1%;
    overflow: hidden;
    &:hover {
        width: 65%
      }
`;

export const Icon = styled.i`
    font-size:30vh;
    width: 100%;
    align-self: center;
    transition-duration: 0.5s;
    ${ContSingin}:hover & {
      width: 30%;
    }
`;

export const Form = styled.div`
    float:right;
    display: flex;
    width: 0%;
    align-items: center;
    justify-content: center;
    transition-duration: 0.5s;
    overflow: hidden;
    ${ContSingin}:hover & {
      width: 70%;
    }
`;