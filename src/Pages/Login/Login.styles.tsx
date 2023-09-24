import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const LoginLeftContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid white;
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background-color: #cfdbd5;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 5rem 5rem;
`;

export const LoginContainer = styled.div`
  width: 30vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* border: 2px solid red; */
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

export const LoginForm = styled.form`
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
