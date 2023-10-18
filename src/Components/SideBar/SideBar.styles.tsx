import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  height: 100%;
  min-width: 240px;
  width: 13%;
  padding: 20px 12px;

  border-radius: 16px;
  background-color: #333533;
`;

export const SideBarHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

export const SignOutButton = styled.div``;
