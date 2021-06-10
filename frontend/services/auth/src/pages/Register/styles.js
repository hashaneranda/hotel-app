import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  border-radius: 8px;

  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);

  padding: 5em 4em;
`;

export const Header = styled.div`
  padding: 1.2em 0;

  h1 {
    margin-bottom: 0.8em;
  }

  .navigate_link {
    color: #2302ff;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export const Form = styled.form`
  padding: 1.6em 0;

  min-width: 35em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  button {
    padding: 1.2em 0;
  }
`;

export const ButtonContainer = styled.div`
  padding: 1.2em 0;

  button {
    min-width: 100%;
  }
`;
