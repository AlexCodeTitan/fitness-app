import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #242423;
`;

export const LoginContainer = styled.div`
  width: 30vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const AuthForm = styled.form`
  height: 50%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
