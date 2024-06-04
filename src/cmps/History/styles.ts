import styled from "styled-components";
import { colors } from "../../constants/styles";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.mainColor};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const W = styled.div`
  display: flex;
  align-items: center;
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

export const ModalWrapper = styled.div`
position: absolute;
  z-index: 10;
  top: 100%;
  right: 0;
  width: 200px;
  height: 300px;
  background-color: ${colors.headerBg};
  color: white;
  transition-duration: 300ms;
  border-bottom-left-radius: 15px;
  overflow-y: scroll;

  &.hide {
    right: -500px;
  }
`;
