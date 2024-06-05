import styled from "styled-components";
import { breakpoints } from "../../constants/styles";


export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  display: none;

  @media (max-width: ${breakpoints.xs}) {
    display: flex;
  }

  &.open {
    & > :first-child {
      transform: rotate(45deg);
      transform-origin: top left;
    }

    & > :nth-child(2) {
      border: 0;
      transform-origin: center;
    }

    & > :last-child {
      transform: rotate(-45deg);
      transform-origin: bottom left;
    }
  }
`;

export const Line = styled.hr`
  border: 0 0 0 2px;
  border-color: white;
  width: 20px;
  margin: 2px;
  transition: all 100ms ease-in-out;
`;
