import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  padding: 0 1em;
`;

export const Header = styled.div`
  display: flex;
  padding: 1.8em 0;
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 50%) 1fr;

  padding: 1.8em 0;
`;

export const DataWrapper = styled.div`
  display: grid;
  place-items: center;
`;

export const ImageContainer = styled.div`
  display: grid;
  place-items: center;
`;
