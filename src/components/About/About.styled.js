import styled from "styled-components";

export const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 6rem;
  padding: 10rem 15rem;
  background: url("https://images.unsplash.com/photo-1558051815-0f18e64e6280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80");
  width: 100%;

  h2 {
    grid-column: 1 / -1;
    font-size: 4rem;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.65);
  }

  span {
    grid-column: 1 / -1;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3rem 2rem 2rem;
    font-size: 2rem;
    background: url("https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
    border: none;
    transform: rotate(3deg);
    font-family: inherit;
    font-size: 3rem;
    font-weight: bold;
    color: #303030;
    cursor: pointer;

    &:hover {
      transform: rotate(-2deg) translateY(-3px);
      filter: brightness(110%);
    }

    &:active {
      filter: brightness(90%);
    }

    svg {
      margin-right: 0.5rem;
      font-size: 3rem;
    }
  }
`;

export const Avatar = styled.img`
  grid-column: 1 / 2;
  display: block;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: bottom;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  border: 0.5rem solid rgba(255, 255, 255, 0.75);

  &:hover {
    transform: rotate(5deg) translateY(-3px);
  }
`;

export const Papers = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
    margin: 1rem;
    padding: 4rem;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
    transform: rotate(-2deg);

    &:hover {
      transform: rotate(1deg) translateY(-3px);
      filter: brightness(110%);
    }

    &:first-child {
      grid-column: 1 / -1;
      transform: rotate(2deg);

      &:hover {
        transform: rotate(-1deg) translateY(-3px);
        filter: brightness(110%);
      }
    }

    &:last-child {
      transform: rotate(3deg);

      &:hover {
        transform: rotate(-2deg) translateY(-3px);
        filter: brightness(110%);
      }
    }
  }

  h3 {
    font-size: 3rem;
    text-decoration: underline;
  }

  p {
    text-align: center;
  }
`;
