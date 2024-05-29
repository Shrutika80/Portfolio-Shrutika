import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #007BFF;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://www.linkedin.com/in/shrutika-maske-74908a15b" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/shrutikamaske" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:sm77shruti@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/Shrutika80" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </SocialIcons>
      <p>&copy; 2024 Shrutika Maske. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
