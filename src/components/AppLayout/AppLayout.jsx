import React, { useContext } from "react";
import { Container } from "../../styles/Shared.styled";
import { AppLayoutContainer } from "./AppLayout.styled";
import { Context } from "../../context/Context";

import About from "../About/About";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Divider from "../Divider/Divider";

const AppLayout = () => {
  const { setMenuActive } = useContext(Context);

  const onMenuClose = () => setMenuActive(false);

  return (
    <AppLayoutContainer onClick={() => onMenuClose()}>
      <Header />
      <Container>
        <Divider id="about" rotate="3deg" margin="1rem 0 3rem" title="О себе" />
        <About />
        <Divider id="skills" rotate="-2deg" margin="3rem 0" title="Навыки" />
        <Skills />
        <Divider id="projects" rotate="1deg" margin="3rem 0" title="Проекты" />
        <Projects />
      </Container>
      <Footer id="contacts" />
    </AppLayoutContainer>
  );
};

export default AppLayout;
