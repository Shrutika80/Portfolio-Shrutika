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

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.5;
  list-style-position: outside;
  font-size: 16px;
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
      desc:  ['Drives innovation in front-end development, integrating new methodologies to improve performance, accessibility, and maintainability',
      'The "Road Event Detection" project involves using a Leaflet map to display locations of cameras for monitoring road activity and real-time alerts for events such as traffic congestion',
      'Implemented caching strategies to store frequently accessed map tiles locally, reducing the number of server requests and improving load times. Initial map load time decreased by 60%, from an average of 5 seconds to 2 seconds.'
      ],
    },
    {
      icon: workIcon,
      date: 'Nov 2020 - June 2023',
      title: 'Software Engineer',
      subtitle: 'Futops Technologies India Private Limited, Pune',
      desc: ['Provided mentorship to junior, sharing best practices for working with code integration, and performance optimization. Conducted regular code reviews',
      'The "People Tracking" project involves using Heatmap.js to display a heatmap that visualizes the density of people in different areas based on real-time data',
      'Successfully integrated a feature using the company UI kit that allows users to draw and select specific rectangular areas on the map.'
      ],
    },
    {
      icon: workIcon,
      date: 'July 2019 - Jan 2020',
      title: 'Associate Software Engineer',
      subtitle: 'Infostretch solution Private Limited, Pune',
      desc: ['Contributes to small, well-defined tasks and projects.',
        'Have worked with web debugging tools (Chrome Developer Console).',
        'Supports the team by fixing bugs and performing minor feature enhancements.'
        ],
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
                  <List>
                    {t.desc.map((item, idx) => (
                      <ListItem key={idx}>{item}</ListItem>
                    ))}
                  </List>
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