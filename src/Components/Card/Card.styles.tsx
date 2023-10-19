import styled from "styled-components";

type CardContainerProps = {
  size?: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  width: ${(props) =>
    props.size === "small"
      ? "calc(20% - 10px)"
      : props.size === "medium"
      ? "calc(30% - 10px)"
      : props.size === "large"
      ? "calc(40% - 10px)"
      : "calc(50% - 10px)"};
  min-width: 350px;
  height: 100%;
  padding: 12px 16px;

  background-color: #333533;
  border-radius: 16px;
`;

export const Header = styled.h2`
  color: #333533;
`;
