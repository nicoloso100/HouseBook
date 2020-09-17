import styled from "styled-components";
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  DotGroup,
  Slider,
} from "pure-react-carousel";
import { device } from "utils/responsiveTemplate";

export const CustomSlider = styled(Slider)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CustomButtonFirst = styled(ButtonFirst)`
  background-color: #f2ce39;
  border: none;
  color: white;
  padding: 4px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: #ffe05d;
    color: white;
  }
  @media ${device.mobile} {
    padding: 4px 15px;
  }
`;
export const CustomButtonBack = styled(ButtonBack)`
  background-color: #f2ce39;
  border: none;
  color: white;
  padding: 4px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: #ffe05d;
    color: white;
  }
  @media ${device.mobile} {
    padding: 4px 15px;
  }
`;
export const CustomButtonNext = styled(ButtonNext)`
  background-color: #f2ce39;
  border: none;
  color: white;
  padding: 4px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: #ffe05d;
    color: white;
  }
  @media ${device.mobile} {
    padding: 4px 15px;
  }
`;
export const CustomButtonLast = styled(ButtonLast)`
  background-color: #f2ce39;
  border: none;
  color: white;
  padding: 4px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: #ffe05d;
    color: white;
  }
  @media ${device.mobile} {
    padding: 4px 15px;
  }
`;
export const CustomDotGroup = styled(DotGroup)`
  button {
    background-color: #f2ce39;
    border: none;
    color: white;
    padding: 4px 13px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    border-radius: 3px;
    cursor: pointer;
    :hover {
      background-color: #ffe05d;
      color: white;
    }
  }
`;
