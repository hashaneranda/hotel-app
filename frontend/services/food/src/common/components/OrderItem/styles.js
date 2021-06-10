import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  border-radius: 8px;

  padding: 2em 2.5em;

  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5em;

  .order_status {
    span {
      font-weight: bold;
      background: green;
      color: #ffffff;
      padding: 1em 2em;
    }
  }
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: minmax(350px, 25%) 1fr;

  margin-bottom: 1.5em;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5em;
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrderListing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 80%;
`;

export const OrderDelivery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
