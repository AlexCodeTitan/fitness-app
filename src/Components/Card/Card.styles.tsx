import styled from "styled-components";

type CardContainerProps = {
  size?: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  width: ${(props) =>
    props.size === "small"
      ? "calc(20% - 20px)"
      : props.size === "medium"
      ? "calc(30% - 20px)"
      : props.size === "large"
      ? "calc(40% - 20px)"
      : "calc(50% - 20px)"};
  min-width: 350px;
  height: 30%;
  padding: 12px 16px;

  background-color: #333533;
  border-radius: 16px;
`;

export const Header = styled.h2`
  color: #333533;
`;
