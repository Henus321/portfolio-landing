import React from "react";
import { FooterContainer } from "./Footer.styled";
import { FaTelegram, FaGithub, FaEnvelope } from "react-icons/fa";
import { CONTACTS } from "../../constants";

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Контакты</h2>
      <span>
        <FaGithub /> {CONTACTS.github}
      </span>
      <span>
        <FaEnvelope /> {CONTACTS.email}
      </span>
      <span>
        <FaTelegram /> {CONTACTS.telegram}
      </span>
    </FooterContainer>
  );
};

export default Footer;
