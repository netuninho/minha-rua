import React from "react";
import styled from "styled-components";
import heartIcon from "../assets/img/icone-coracao.svg";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  font-size: 0.7rem;
`;

const FooterInfo = styled.div`
  line-height: 1.2rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HeartIcon = styled.img`
  width: 10px;
  transition: transform 0.2s ease;
  margin-left: 0.3rem;

  &:hover {
    transform: scale(1.05);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <p>
          Code with heart. Design with purpose
          <HeartIcon src={heartIcon} alt="Ícone de coração" />
        </p>
      </FooterInfo>

      <p>
        © 2025. Produzido por{" "}
        <FooterLink href="https://github.com/netuninho" target="_blank">
          Manuela Silva
        </FooterLink>
      </p>
    </FooterContainer>
  );
};

export default Footer;
