import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 58px);
  padding: 2rem;
  background-color: #070707;
  color: white;
  position: relative;

  @media screen and (min-width: 600px) {
    min-height: calc(100vh - 66px);
  }

  .projects-innerDiv {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .projects-title {
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

  .projects-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 600px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .project-card {
    height: 100%;
    max-width: 30rem;
    min-height: 100px;
    background-color: #292929;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    &:hover {
      transform: translateY(-10px);
    }

    header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 150px;
      width: 100%;
      z-index: 1000;
      position: relative;
      -webkit-box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 300px) {
        height: 130px;
      }

      h2 {
        color: white;
        position: absolute;
        top: 30px;
        text-align: center;
        font-size: 1.3rem;
      }

      span {
        font-size: 0.85rem;
        color: white;
        position: absolute;
        top: 57px;
      }

      .avatar {
        width: 6rem;
        height: 6rem;
        position: absolute;
        bottom: -19%;
        padding: 12px;
        z-index: 999;
        -webkit-box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 300px) {
          width: 5rem;
          height: 5rem;
        }
      }
    }

    .project-info {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: auto;
      min-height: 230px;
      padding: 0 1rem;
      margin-top: 1rem;

      ul {
        align-self: center;
        text-align: start;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.7rem;

        & > li > p {
          display: inline-flex;
          font-size: 1rem;
          gap: 8px;

          @media screen and (max-width: 300px) {
            font-size: 0.8rem;
          }
        }

        & > li > p > span {
          font-size: 2rem;
          line-height: 1rem;
          align-self: flex-start;

          @media screen and (max-width: 300px) {
            font-size: 1.5rem;
          }
        }
      }
    }

    .project-techs {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;

      ul {
        color: white;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        align-items: center;

        @media screen and (min-width: 600px) {
          height: 100px;
        }

        li {
          font-size: 0.7rem;
          background-color: #565656;
          border-radius: 5px;
          padding: 5px 10px;

          @media screen and (max-width: 300px) {
            font-size: 0.6rem;
          }
        }
      }
    }

    .project-nav {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 0 1rem;
      margin-bottom: 1rem;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 300px) {
        gap: 0.7rem;
      }

      a {
        color: white;
        text-decoration: none;
      }

      button {
        text-transform: capitalize;
        font-size: 0.8rem;

        @media screen and (max-width: 300px) {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
