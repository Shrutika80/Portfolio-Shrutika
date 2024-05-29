import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { ProjectCardProps } from './Projects';

const CardContainer = styled.div`
  background: #fff;
  width: 24em;
  border-radius: 0.6em;
  margin: 1em;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 
              0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 
              0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 
                0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 
                0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  h2 {
    color: #222;
    margin-top: -0.2em;
    line-height: 1.4;
    font-size: 1.3em;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    transition: all ease-in 100ms;
  }

  p {
    color: #777;
  }

  h5 {
    color: #bbb;
    font-weight: 700;
    font-size: 0.7em;
    letter-spacing: 0.04em;
    margin: 1.4em 0 0 0;
    text-transform: uppercase;
  }
`;

const CardBody = styled.div`
  padding: 1.2em;
`;

const Image = styled.img`
  width: 384px;
  height: 288px;
  object-fit: cover;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  color: #007BFF;
  text-decoration: none;
  font-weight: 500;
  margin-top: 1em;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  svg {
    margin-right: 0.5em;
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, imgUrl }) => {

  return (
    <CardContainer>
      <Image src={imgUrl} alt={title} />
      <CardBody>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={link} target='_blank' rel="noreferrer">
          <FontAwesomeIcon icon={faCode} />
          View Code
        </Link>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
