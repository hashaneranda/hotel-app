import styled from "styled-components";

export const SidebarWrapper = styled.div`
  z-index: 1;
  position: fixed;
  width: 112px;
  height: 100%;
  left: 0;
  top: 0;
  background: #8377d1;

  transition: transform 0.3s ease-in;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 0;
  padding-left: 30px;
`;

export const MainNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3em;

  .navLogo {
    width: 56px;
  }
`;
