import styled from "styled-components";

type ButtonContainerProps = {
  $customType?: string;
  size?: string;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${(props) =>
    props.size === "sm"
      ? "width: 8rem; font-size: 0.9rem;"
      : props.size === "md"
      ? "width: 12rem; height: 2.8rem; font-size: 1rem;"
      : props.size === "xl"
      ? "width: 12rem; height: 3rem; font-size: 1rem;"
      : "width: fit-content;"}
  ${(props) =>
    props.$customType === "google"
      ? "width: 70%; height: 3rem; font-size: 1rem; background-color: #4fb2b6; color: #e0e9e4;"
      : props.$customType === "secondary"
      ? "background-color: #242423; color: #cfdbd5;"
      : "background-color: #f5cb5c; color: #242423;"}

  min-height: 2.2rem;
  padding: 10px 30px;
  border-radius: 30px;
  border: none;

  font-weight: 700;

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    ${(props) =>
      props.$customType === "google"
        ? "background-color: #03989E"
        : props.$customType === "secondary"
        ? "background-color: #4e4e4d;"
        : "background-color: #eeb71e;"}
  }
`;
