import React from 'react';
import styled from 'styled-components';
import MyPhotoUrl from '../Images/shrutika.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'; // Added faDownload icon
import { calculateExperience } from '../Utils';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: left;
  color: #ffffff;
  overflow: hidden;
  background: linear-gradient(to bottom right, #000000, #ffffff);
`;

const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 30%;
  height: 100vh;
  width: auto;
  opacity: 0.5;
`;

const HeroContent = styled.div`
  z-index: 10;
  margin-left: 10%;
  max-width: 50%;
`;

const FirstTitle = styled.div`
  font-weight: 200;
  font-size: 35px;
  margin-bottom: 25px;
`;

const Name = styled.div`
  font-size: 90px;
  font-weight: 700;
  line-height: 0.7;
  color: inherit;
  margin-bottom: 20px;
`;

const Role = styled.div`
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 30px;
`;

const RoleDetail = styled.div`
  font-weight: 500;
  font-size: 25px;
  font-family: "Times New Roman", Times, serif;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const SocialMediaIcon = styled.a`
  color: white;
  font-size: 30px;
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700; // Gold color on hover
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #FFD700;
  color: #000000;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #000000;
    color: #FFD700;
  }
`;

const Hero: React.FC = () => {

  return (
    <HeroSection id="hero">
      <HeroContent>
        <FirstTitle>Hi, I'm</FirstTitle>
        <Name>Shrutika Maske</Name>
        <Role>Front-End Developer</Role>
        <RoleDetail>Experienced Front-End Developer with {calculateExperience('2019-07-01')} years of expertise in creating engaging and intuitive user interfaces.</RoleDetail>
        <SocialMediaContainer>
          <SocialMediaIcon href="https://github.com/Shrutika80" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.instagram.com/shrutikamaske" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.linkedin.com/in/shrutika-maske-74908a15b" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialMediaIcon>
          <SocialMediaIcon href="mailto:sm77shruti@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialMediaIcon>
        </SocialMediaContainer>
        <DownloadButton href="./SD2_Shrutik_Maske.pdf" download>
          Download CV <FontAwesomeIcon icon={faDownload} />
        </DownloadButton>
      </HeroContent>
      <Photo src={MyPhotoUrl} alt="Your Photo" />
    </HeroSection>
  );
};

export default Hero;
