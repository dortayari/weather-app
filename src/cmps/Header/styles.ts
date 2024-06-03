import styled from "styled-components";
import { colors } from "../../constants/styles";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.mainColor};
`;


export const Input = styled.input`
  color: black;
  padding: 3px;
`;