import styled from "styled-components";
import { breakpoints, colors } from "../../constants/styles";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  flex-direction: column;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  flex-direction: column;
  color: white;
  max-width: fit-content;
  width: 80%;
  background-color: ${colors.headerBg};
  -webkit-box-shadow: 0px 10px 27px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 10px 27px 0px rgba(66, 68, 90, 1);
  box-shadow: 0px 10px 27px 0px rgba(66, 68, 90, 1);

  @media (max-width: ${breakpoints.s}) {
    width: 65%;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 50%;
  }
`;

export const Title = styled.h2`
  color: "black";

  @media (max-width: ${breakpoints.s}) {
    font-size: 1.2em;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: 1em;
  }
`;

export const SubTitle = styled.h2`
  display: flex;
  color: "black";

  @media (max-width: ${breakpoints.xs}) {
    font-size: 0.9em;
  }

  @media (max-width: ${breakpoints.s}) {
    font-size: 0.8em;
  }
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

export const P = styled.p`
  display: flex;
  color: "black";
  font-size: 0.6em;
`;
