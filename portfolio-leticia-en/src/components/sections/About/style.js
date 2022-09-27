import styled from "styled-components";

export const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 58px);
  min-height: 100vh;
  padding: 2rem;
  color: white;
  background: #eb5757; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom left,
    #000000,
    #eb5757
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom left,
    #000000,
    #eb5757
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media screen and (min-width: 600px) {
    min-height: calc(100vh - 66px);
    padding: 2rem 6rem;
  }

  @media screen and (min-width: 850px) {
    flex-direction: row;
    padding: 2rem;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  .about-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .about-title {
    height: 100%;
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
      width: 6rem;
      background-color: #eb5757;
      align-self: center;
    }
  }

  .about-textAndLottie {
    height: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 850px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }

  .lottie {
    max-width: 600px;
    max-height: 600px;
  }

  .about-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    text-align: start;

    @media screen and (min-width: 850px) {
      width: 50%;
    }
  }

  .typewriter {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 0.3rem;
    min-height: 2rem;
  }

  .kenzie {
    text-decoration: none;
    text-decoration-line: none;
    color: white;
  }

  .kenzie:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .hire-me {
    font-weight: bold;
  }

  .linkedin {
    text-decoration: none;
    text-decoration-line: none;
    color: white;
  }

  .linkedin:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .email:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .divider-2 {
    background: white;
    width: 96%;
  }

  .location {
    display: flex;
    gap: 3px;
    align-items: center;
  }
`;
