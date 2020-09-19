import { Label } from "reactstrap";
import styled from "styled-components";

export const FormLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormLabelText = styled(Label)`
  font-size: 12px;
`;
export const FormLabelRequired = styled(Label)`
  font-size: 12px;
  margin-right: 3px;
  color: red;
`;
