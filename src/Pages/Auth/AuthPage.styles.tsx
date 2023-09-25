import styled, { css, keyframes } from "styled-components";

const fadeOutOnSignUp = keyframes`
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const fadeOutOnSignIn = keyframes`
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

type AuthProps = {
  $isSignUp: boolean;
};

export const AuthWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #242423;
  position: relative;
  overflow: hidden;
`;

export const AuthContainer = styled.div<AuthProps>`
  height: 100%;
  width: 100%;
  background-color: #cfdbd5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  transition: 0.7s cubic-bezier(0.4, 0, 0.2, 1);

  * {
    animation: ${(props) =>
        props.$isSignUp ? fadeOutOnSignUp : fadeOutOnSignIn}
      0.9s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${(props) =>
    !props.$isSignUp
      ? "clip-path: polygon(0 0, 25% 0, 100% 100%, 0% 100%); padding: 0 0 10rem 12rem;"
      : "clip-path: polygon(75% 0, 100% 0, 100% 100%, 0% 100%); padding: 0 10rem 6rem 0; align-items: end;"}
`;

// const fadeInOut = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

const moveSignUp = keyframes`
  0% {
    top: 10%;
    right: 20%;
    opacity: 0;
  }
  50% {
    top: 10%;
    right: 90%;
    opacity: 0;
  }
  100% {
    top: 10%;
    right: 60%;
    opacity: 1;
  }
`;

const moveSignIn = keyframes`
  0% {
    top: 10%;
    right: 60%;
    opacity: 0;
  }
  50% {
    top: 10%;
    right: -20%;
    opacity: 0;
  }
  100% {
    top: 10%;
    right: 20%;
    opacity: 1;
  }
`;

export const LogoContainer = styled.div<AuthProps>`
  position: absolute;

  ${(props) =>
    !props.$isSignUp
      ? css`
          animation: ${moveSignIn} 1s cubic-bezier(0.445, 0.05, 0.55, 0.95)
            forwards;
        `
      : css`
          animation: ${moveSignUp} 1s cubic-bezier(0.445, 0.05, 0.55, 0.95)
            forwards;
        `}

  img {
    position: relative;
    height: 60vh;
    z-index: 2;
  }
`;

export const LogoCircle = styled.div`
  position: absolute;
  top: 30%;
  right: 0%;
  width: 50vh;
  height: 50vh;
  background-color: #242423;
  border-radius: 35vh;
  z-index: 1;
`;
