import styled from "styled-components";

export const StyledDiv = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem;
  max-width: 500px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    input,
    textarea,
    label {
      color: white;
    }
  }

  .alert {
    width: 100%;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
