import styled from "styled-components";

export const SkillsDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 45rem;
  color: white;

  .skills-ul {
    position: relative;
    padding-left: 0;
    list-style: none;
    font-size: 3rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: 4rem;
    width: 4rem;
    gap: 0.7rem;

    svg {
      width: 2.5em;
      height: 2.5rem;
      color: #ffffffe8;
    }
  }

  .skill-name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
  }
`;
