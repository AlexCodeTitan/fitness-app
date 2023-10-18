import styled from "styled-components";

export const NavButtonContainer = styled.a`
  width: 80%;
  min-height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 50px;
  transition: 0.2s;
  text-decoration: none;

  &:visited {
    text-decoration: none;
    color: inherit;
  }
  &:link {
    text-decoration: none;
  }
  &:hover {
    background-color: #f5cb5c;
    border-radius: 50px;
    color: #242423;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #f5cb5c;
  color: #242423;
`;
