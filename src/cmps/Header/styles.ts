import styled from "styled-components";
import { breakpoints, colors, fontsSize } from "../../constants/styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: ${colors.headerBg};
  padding-inline: 10px;
  height: 64px;
`;

export const Title = styled.h1`
  font-size: ${fontsSize.titleM};
  text-align: center;
  color: ${colors.mainColor};

  @media (max-width: ${breakpoints.s}) {
    font-size: ${fontsSize.titleS};
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${fontsSize.titleXS};
  }
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