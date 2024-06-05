import styled from "styled-components";
import { breakpoints, colors } from "../../constants/styles";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  flex-direction: column;
`;

export const TempWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const TempPreview = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Button = styled.button`
  align-self: center;
  border: 2px ${colors.mainColor} solid;
  padding-right: 10px;
  padding-left: 10px;
  height: 40px;
  border-radius: 15px;
  font-size: 1em;
  background-color: inherit;
  color: ${colors.mainColor};

  &:hover {
    cursor: pointer; 
    transition-duration: 300ms;
    background-color: ${colors.mainColor};
    color: ${colors.headerBg};
  }
`;

export const Image = styled.img`
  width: 20px;
  height: 30px;
  color: ${colors.mainColor};
`
