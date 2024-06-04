import styled from "styled-components";
import { breakpoints } from "../../constants/styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.xs}) {
    display: none;
  }
`;

export const Title = styled.p`
  display: flex;
  font-size: 0.9em;
  align-items: center;

  @media (max-width: ${breakpoints.xs}) {
    display: none;
  }
`;
