import styled from "styled-components";
import { colors } from "../../constants/styles";

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
  border: 2px ${colors.mainBorder} solid;
`;

export const Title = styled.h2`
  color: "black";
`;

export const SubTitle = styled.h2`
  display: flex;
  color: "black";
`;
