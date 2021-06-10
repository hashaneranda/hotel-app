import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 8px;

  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);

  img {
    width: 100%;
    height: 26em;
  }
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  text-align: center;
  padding-bottom: 1em;

  .title {
    font-weight: bold;
    margin-top: 1em;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -15px;
      height: 3px;
      left: 40%;
      background: #fc4503;
      width: 13%;
    }
  }

  .price {
    margin-top: 1em;
  }

  button {
    margin-top: 2em;
    padding: 1em 3em;
  }
`;
