import styled from "styled-components";

export const FoodWrapper = styled.div`
  padding: 1em 0;

  display: grid;
  grid-gap: 1.9rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

export const InfoContainer = styled.div`
  min-height: 80vh;
  min-width: 100%;

  display: grid;
  place-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;
