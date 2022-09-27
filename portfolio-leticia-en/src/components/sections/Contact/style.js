import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 58px);
  padding: 2rem;
  background-color: #070707;
  color: white;

  @media screen and (min-width: 600px) {
    min-height: calc(100vh - 66px);
  }

  .contact-innerDiv {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .contact-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    align-self: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.8rem;
      align-self: center;
    }

    .divider {
      height: 4px;
      width: 4rem;
      background-color: #eb5757;
      align-self: center;
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    margin-top: 0.5rem;

    svg {
      z-index: 999;
      width: 2.5em;
      height: 2.5rem;
      color: #ffffffe8;
    }

    svg:hover {
      color: #eb5757;
    }
  }
`;
