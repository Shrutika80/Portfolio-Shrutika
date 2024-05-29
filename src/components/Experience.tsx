import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const ExperienceSection = styled.section`
  padding: 2rem;
  background-color: #ebebeb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const Title = styled.div`
  margin: 0 0 20px 0;
  font-family: "Space Mono", Arial, serif;
  font-weight: 600;
  font-size: 20px;
`;

const Subtitle = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #bfbfbf;
`;

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};

const Experience: React.FC = () => {  
    const timeline = [
    {
      icon: workIcon,
      date: 'June 2023 - Present',
      title: 'Senior Software Engineer',
      subtitle: 'Futops Technologies India Private Limited, Pune',
      desc: 'Mentored and coached junior engineers, fostering a culture of learning and collaboration within the team. Collaborated closely with cross-functional teams to translate business requirements into robust, user-centric applications.',
    },
    {
      icon: workIcon,
      date: 'Nov 2020 - June 2023',
      title: 'Software Engineer',
      subtitle: 'Futops Technologies India Private Limited, Pune',
      desc: 'Collaborated in Agile environments, translating designs into responsive code, integrating Leaflet maps, and enhancing UI-kit components. Continuously improved codebase by adopting best practices and contributing to code reviews and documentation efforts.',
    },
    {
      icon: workIcon,
      date: 'July 2019 - Jan 2020',
      title: 'Associate Software Engineer',
      subtitle: 'Infostretch solution Private Limited, Pune',
      desc: 'Developed customer-facing applications using ReactJs, React Hooks, React-Router, JavaScript, Styled-components, HTML5, and CSS3 with skills in code minification and web debugging.',
    }
  ];

  return (
    <ExperienceSection id='experience'>
        <Heading>EXPERIENCE</Heading>
      <VerticalTimeline>
        {timeline.map((t, i) => {
            const arrowStyle = { borderRight: '7px solid  rgb(33, 150, 243)' }
          
          return (
            <VerticalTimelineElement
              key={i}
              className="timeline__experience__vertical-timeline-element"
                contentArrowStyle={arrowStyle}
              {...t.icon}
              date={t.date}
            >
              {t.title ? (
                <>
                  <Title>{t.title}</Title>
                  {t.subtitle && (
                    <Subtitle>{t.subtitle}</Subtitle>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </ExperienceSection>
  );
}

export default Experience;