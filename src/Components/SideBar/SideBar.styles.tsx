import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  gap: 16px;
  height: 100%;
  width: 13%;
  padding: 12px;

  border-radius: 16px;
  background-color: #333533;
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;

  border-radius: 40%;
  border: 2px solid #f5cb5c;
  background-color: #242423;

  img {
    width: 100%;
    /* object-fit: contain; */
  }
`;

export const SideBarTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2:last-of-type {
    color: #f5cb5c;
  }
`;

export const NavContainer = styled.div``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  span:first-of-type {
    color: #f5cb5c;
  }
`;

export const SignOutButton = styled.div``;
