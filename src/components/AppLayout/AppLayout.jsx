import React from "react";
import { Container } from "../../styles/Shared.styled";
import { AppLayoutContainer } from "./AppLayout.styled";

import About from "../About/About";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Divider from "../Divider/Divider";

const AppLayout = () => {
  return (
    <AppLayoutContainer>
      <Header />
      <Container>
        <Divider rotate="3deg" margin="3rem 0" title="О себе" />
        <About />
        <Divider rotate="-2deg" margin="3rem 0" title="Навыки" />
        <Skills />
        <Divider rotate="1deg" margin="3rem 0" title="Проекты" />
        <Projects />
      </Container>
      <Footer />
    </AppLayoutContainer>
  );
};

export default AppLayout;
