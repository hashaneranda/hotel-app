import styled from "styled-components";

export const Container = styled.div``;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 50%) 1fr;

  padding: 1.8em 0;

  padding: 30px;

  min-height: 100vh;
  width: calc(100% - 112px);
  transform: translateX(112px);
  transition: all 0.3s ease-in-out;
  overflow-x: hidden;
`;
