import styled from "styled-components";

export const SignUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #242423;
`;

export const SignUpRightContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid white;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background-color: #cfdbd5;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  padding: 0 5rem 2rem 0;
`;

export const SignUpContainer = styled.div`
  width: 32vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    text-align: center;
  }

  form {
    height: 75%;
  }
`;
