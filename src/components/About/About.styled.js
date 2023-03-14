import styled from "styled-components";

export const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: min-content 1fr 1fr;
  grid-column-gap: 4rem;
  width: 100%;
  padding: 6rem 15rem 8rem;
  background: url("https://images.unsplash.com/photo-1558051815-0f18e64e6280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.colors.default};

  @media only screen and (max-width: ${({ theme }) => theme.tabLand}) {
    padding: 4rem 8rem 7rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
    display: flex;
    flex-direction: column;
    padding: 3rem 4rem 6rem;
  }

  h2 {
    grid-column: 1 / -1;
    font-size: 4rem;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.65);

    @media only screen and (max-width: ${({ theme }) => theme.tabLand}) {
      font-size: 6rem;
      text-align: center;
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 5rem;
      text-align: center;
    }
  }

  h3 {
    font-size: 3rem;
    text-align: center;
    text-decoration: underline;
  }

  p {
    text-align: center;
  }

  span {
    grid-column: 1 / -1;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);

    @media only screen and (max-width: ${({ theme }) => theme.tabLand}) {
      font-size: 3rem;
      text-align: center;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;

  @media only screen and (max-width: ${({ theme }) => theme.tabLand}) {
    grid-column: 1 / -1;
    align-items: center;
    margin-right: 0;
  }
`;

export const Git = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: min-content;
  padding: 3rem 2rem 2rem;
  background: url("./img/paper-texture.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  border: none;
  transform: rotate(3deg);
  font-family: inherit;
  font-size: 3rem;
  font-weight: bold;
  color: inherit;
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) => theme.tabLand}) {
    margin: 1rem 0 3.5rem;
    padding: 4rem 12rem;
    font-size: 4rem;
    transform: rotate(-0.5deg);
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 4rem 7.5rem;
  }

  &:hover {
    transform: rotate(-2deg) translateY(-3px);
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(96%);
  }

  svg {
    margin-right: 0.5rem;
    font-size: 3rem;

    @media only screen and (max-width: ${({ theme }) => theme.tabLand}) {
      font-size: 4rem;
    }
  }
`;

export const Avatar = styled.img`
  display: block;
  margin-bottom: 2rem;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: bottom;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  border: 0.5rem solid rgba(255, 255, 255, 0.75);

  @media only screen and (max-width: ${({ theme }) => theme.tabLand}) {
    width: 40rem;
    height: 40rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 30rem;
    height: 30rem;
  }

  &:hover {
    transform: rotate(5deg) translateY(-3px);
  }
`;

export const Information = styled.div`
  grid-column: 2 / 4;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  margin-bottom: 4rem;
  background: url("./img/paper-texture.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  transform: rotate(2deg);

  @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
    transform: rotate(1deg);
    margin-bottom: 3rem;
  }

  &:hover {
    transform: rotate(-1deg) translateY(-3px);
    filter: brightness(105%);
  }
`;

export const Experience = styled.div`
  grid-column: 2 / 3;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background: url("./img/paper-texture.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  transform: rotate(-2deg);

  @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
    transform: rotate(-1deg);
    margin-bottom: 3rem;
  }

  &:hover {
    transform: rotate(1deg) translateY(-3px);
    filter: brightness(105%);
  }
`;

export const Education = styled.div`
  grid-column: 3 / 4;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background: url("./img/paper-texture.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  transform: rotate(3deg);

  @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
    transform: rotate(0);
  }

  &:hover {
    transform: rotate(-2deg) translateY(-3px);
    filter: brightness(105%);
  }
`;
