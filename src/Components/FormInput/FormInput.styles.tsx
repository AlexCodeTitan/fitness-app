import styled from "styled-components";

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    height: 4rem;
    width: 100%;
    border: none;
    border-radius: 30px;
    padding: 0 1.2rem;
    font-size: 1rem;
    background-color: #242423;
    color: #cfdbd5;

    &:focus {
      outline: 2px solid #cfdbd5;

      box-shadow: 0px 0px 15px 5px rgba(36, 36, 35, 0.42);
    }
  }
`;
