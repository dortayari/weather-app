import styled from "styled-components";
import { colors } from "../../constants/styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: ${colors.headerBg};
  padding-inline: 10px;
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

export const NavItems = styled.div`
  display: flex;
  gap: 5px;
  color: ${colors.mainColor};
`;