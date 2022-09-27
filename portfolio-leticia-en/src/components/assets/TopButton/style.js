import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  bottom: 1.25rem;
  right: 1.875rem;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #EB5757;
  color: white;
  cursor: pointer;
  padding: 5px;
  border-radius: 0.625rem;
  font-size: 1.25rem;

  i {
    display: flex;
  }

  &.on {
    opacity: 1;
    transition: opacity 0.1s linear;
  }

  &.off {
    opacity: 0;
    transition: opacity 0.1s linear;
  }
`;
