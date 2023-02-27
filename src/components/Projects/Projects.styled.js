import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: 2rem;
  }
`;

export const Project = styled.section`
  display: flex;
  margin-bottom: 6rem;
  background-color: white;
  padding: 2rem;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);

  &:last-child {
    flex-direction: row-reverse;
  }

  img {
    display: block;
    width: 55%;
    object-fit: cover;
  }

  div {
    width: 45%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding: 0 3rem;
  }

  h3 {
    grid-column: 1 / -1;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 2rem;
  }

  p {
    grid-column: 1 / -1;
  }

  button {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;
