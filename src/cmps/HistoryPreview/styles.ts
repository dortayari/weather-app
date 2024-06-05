import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 4px;

  &:hover >* {
    border-color: red;
    transition-duration: 300ms;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 0 0 0 2px;
`;

