import styled from "styled-components";

export const HomeMainDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 58px;
  min-height: 100vh;
  padding: 2rem;
  gap: 1rem;
  color: white;
  background: #eb5757; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom right,
    #000000,
    #eb5757
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom right,
    #000000,
    #eb5757
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media (min-width: 600px) {
    margin-top: 66px;
  }

  @media (min-width: 720px) {
    padding: 2rem 0 2rem 2rem;
    height: 100vh;
  }

  .language {
    position: absolute;
    top: 3px;
    right: 3px;
    text-decoration: none;

    button {
      display: flex;
      gap: 3px;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 600px) {
      top: 6px;
      right: 6px;
    }
  }

  .home-text-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 3rem;
    width: 100%;

    @media (min-width: 720px) {
      width: 76%;
    }

    .home-text-top-div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 32px;

      @media (min-width: 450px) {
        margin-top: 0;
      }

      img {
        width: 50px;
        border-radius: 50%;
      }

      h1 {
        font-size: 1.1rem;
        font-weight: 500;

        @media (min-width: 600px) {
          font-size: 1.5rem;
        }

        .name {
          color: #eb5757;
        }

        .wave-emoji {
          margin-left: 5px;
          animation-duration: 1.8s;
          animation-iteration-count: infinite;
          animation-name: wave;
          display: inline-block;
          transform-origin: 70% 70%;
          animation-fill-mode: forwards;
        }
      }
    }

    h2 {
      font-size: 1.2rem;
      height: 3.5rem;

      @media (min-width: 600px) {
        font-size: 1.6rem;
      }
    }

    .Typewriter {
      height: 3.5rem;

      @media (min-width: 600px) {
        height: auto;
      }
    }

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(-10deg);
      }
      20% {
        transform: rotate(12deg);
      }
      30% {
        transform: rotate(-10deg);
      }
      40% {
        transform: rotate(9deg);
      }
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    .linksAndButtons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .links {
      svg {
        width: 2.5em;
        height: 2.5rem;
        color: #ffffffe8;
      }

      svg:hover {
        color: #eb5757;
      }
    }
  }

  .home-banner-div {
    display: none;

    @media (min-width: 720px) {
      display: block;
    }

    img {
      width: 100%;
    }
  }
`;
