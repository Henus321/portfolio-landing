import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15rem;
  margin-bottom: 6rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: 2rem;
  }
`;

export const Project = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 6rem;
  padding: 2rem;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
  background-image: url("https://images.unsplash.com/photo-1548685913-fe6678babe8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1438&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0.5rem solid white;
  transform: rotate(0.3deg);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        130deg,
        rgba(242, 221, 198, 0.15),
        7%,
        transparent,
        85%,
        rgba(255, 255, 255, 0.1)
      ),
      linear-gradient(
        280deg,
        rgba(222, 184, 135, 0.15),
        7%,
        transparent,
        85%,
        rgba(255, 255, 255, 0.1)
      );
  }

  &:nth-child(odd) {
    transform: rotate(-0.3deg);
    flex-direction: row-reverse;
    background-position: bottom;
  }
`;

export const ImageContainer = styled.a`
  display: block;
  width: 55%;
  z-index: 2;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  border: 0.5rem solid rgba(255, 255, 255, 0.7);
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: rotate(1deg) translateY(-3px);
  }
`;

export const Information = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 3rem;
  margin-top: 3rem;
  z-index: 2;

  h3 {
    grid-column: 1 / -1;
    margin-bottom: 2rem;
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 2.5rem;
  }

  p {
    grid-column: 1 / -1;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  a {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 3rem;
    color: #303030;
    background-color: white;
    font-weight: bold;
    font-size: 2.5rem;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transform: rotate(-1deg);

    &:last-child {
      transform: rotate(1deg);
    }

    &:hover {
      transform: rotate(2deg) translateY(-3px);
      filter: brightness(110%);
    }

    &:active {
      filter: brightness(90%);
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: auto;
    margin-bottom: 3rem;
  }
`;
