import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const Input = styled.input`
  width: 50%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  max-width: 400px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;
