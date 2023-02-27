import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const SkillsBackground = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4rem 5rem;
  width: 75%;
  background-color: white;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);

  h2 {
    grid-column: 1 / -1;
    font-size: 4rem;
    font-weight: normal;
    margin-bottom: 2rem;
    text-align: center;
  }

  h3 {
    font-weight: normal;
    font-size: 2rem;
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }
`;

export const SkillsEl = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
`;

export const SkillsAdditionalEl = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export const Icons = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  svg {
    font-size: 4rem;
    height: 4rem;
    width: 4rem;
    color: #303030;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
