import React from "react";
import { Container } from "../../styles/Container.styled";
import { StyledAppLayout } from "./AppLayout.styled";

import About from "../About/About";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Container>
        <About />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </StyledAppLayout>
  );
};

export default AppLayout;
