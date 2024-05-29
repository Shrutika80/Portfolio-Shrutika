import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import TodoList from '../Images/ToDo.jpg';
import GitHubProfile from '../Images/profile.webp';
import NewsApp from '../Images/newsApp.png';

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imgUrl: string;
}

const projects: ProjectCardProps[] = [
  {
    title: 'ToDo App',
    description: 'Description of project one.',
    link: 'https://github.com/Shrutika80/ToDoApp-Javascript',
    imgUrl: TodoList,
  },
  {
    title: 'GitHub Profile Fetch',
    description: 'Description of project two.',
    link: 'https://github.com/Shrutika80/GITHUB-profile-reactjs',
    imgUrl: GitHubProfile
  },
  {
    title: 'News App',
    description: 'Description of project two.',
    link: 'https://github.com/Shrutika80/News-app-Reactjs',
    imgUrl: NewsApp
  }
];

const ProjectsSection = styled.section`
  padding: 2rem;
  background-color: #ECE4DE;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <Heading>PROJECTS</Heading>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
