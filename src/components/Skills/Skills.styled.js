import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const SkillsBackground = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4rem 5rem;
  width: 75%;
  background-color: white;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  background-image: url("https://images.unsplash.com/photo-1519972345803-7b5e39723995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotate(0.5deg);

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
    font-size: 2rem;
    text-decoration: underline;
    z-index: 2;
  }

  ul {
    list-style: none;
    z-index: 2;
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
