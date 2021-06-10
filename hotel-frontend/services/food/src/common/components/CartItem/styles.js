import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
  min-width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2em 2.3em;
`;

export const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const CardDetailsAction = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
`;
