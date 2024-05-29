import React from 'react';
import styled from 'styled-components';
import { calculateExperience } from '../Utils';

const AboutSection = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5rem;
  width: 50%;
`;

const ProfileSection = styled.div`
  flex: 1;
`;

const ProfileText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin-bottom: 1rem;
`;

const ProfileDetail = styled.div`
  margin-bottom: 1rem;
`;

const DetailTitle = styled.span`
  font-weight: bold;
  color: #333;
`;

const DetailContent = styled.span`
  color: #555;
`;

const SkillsSection = styled.div`
  flex: 1;
`;

const Skill = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 20px;
`;

const SkillName = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
`;

const SkillBar = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const SkillLevel = styled.div<{ level: number }>`
  height: 1rem;
  width: ${(props) => props.level}%;
  background-color: #4caf50;
`;

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React JS', level: 75 },
  { name: 'TypeScript', level: 70 },
];

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Heading>ABOUT ME</Heading>
      <Wrapper>
      <ContentWrapper>
        <ProfileSection>
          <ProfileText>
            <strong>PROFILE</strong><br />
            I am a dedicated and passionate Front-End Developer with over {calculateExperience('2019-07-01')} years of experience in creating dynamic and responsive user interfaces. My expertise lies in using modern web technologies, including React.js, JavaScript, TypeScript, HTML, and CSS, to build seamless user experiences and interfaces for client-facing applications.
          </ProfileText>
          <ProfileDetail>
            <DetailTitle>FULLNAME: </DetailTitle>
            <DetailContent>Shrutika Maske</DetailContent>
          </ProfileDetail>
          <ProfileDetail>
            <DetailTitle>JOB: </DetailTitle>
            <DetailContent>Freelancer, Frontend Developer</DetailContent>
          </ProfileDetail>
          <ProfileDetail>
            <DetailTitle>EMAIL: </DetailTitle>
            <DetailContent>sm77shruti@gmail.com</DetailContent>
          </ProfileDetail>
          <ProfileDetail>
            <DetailTitle>CONTACT: </DetailTitle>
            <DetailContent>+91 8668945645</DetailContent>
          </ProfileDetail>
        </ProfileSection>
        <SkillsSection>
        <ProfileText>
        <strong>SKILLS</strong>
        </ProfileText>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillName>{skill.name}</SkillName>
              <SkillBar>
                <SkillLevel level={skill.level} />
              </SkillBar>
            </Skill>
          ))}
        </SkillsSection>
      </ContentWrapper>
      </Wrapper>
    </AboutSection>
  );
};

export default About;
