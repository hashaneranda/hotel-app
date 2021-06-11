import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FoodWrapper = styled.div`
  padding: 1em 0;

  display: flex;
  flex-direction: column;
  gap: 1.9rem;
`;

export const CartSummary = styled.div`
  padding: 1em 0;

  display: flex;
  flex-direaction: row;
  justify-content: space-between;
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

  img {
    width: 20em;
  }
`;
