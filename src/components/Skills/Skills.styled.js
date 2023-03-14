import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.default};
`;

export const SkillsBackground = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4rem 5rem;
  width: 75%;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  background-image: url("https://images.unsplash.com/photo-1519972345803-7b5e39723995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotate(0.5deg);

  @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
    grid-template-columns: 1fr;
    padding: 3rem 4rem;
    width: 80%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.25),
      7%,
      transparent,
      85%,
      rgba(0, 0, 0, 0.25)
    );
  }

  h3 {
    font-size: 2.5rem;
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
  margin-bottom: 1rem;
  z-index: 2;
`;

export const SkillsAdditionalEl = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  z-index: 2;
`;

export const Icons = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  z-index: 2;

  div {
    display: flex;
    flex-wrap: no-wrap;
    margin-bottom: 1rem;

    &:last-child {
      @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }

  svg {
    font-size: 4rem;
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;
  }
`;
