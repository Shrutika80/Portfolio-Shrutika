import React, { useState } from 'react';
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

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (index: number) => {
    setExpanded(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };
  
    const timeline = [
    {
      icon: workIcon,
      date: 'Jan 2025 - Present',
      title: 'IT Analyst',
      subtitle: 'Tata Consultancy Services, Pune',
      desc:  ['Mentored and led a team of 2-3 junior developers, providing guidance on best practices for code integration and performance optimization.',
      'Drive the adoption of new methodologies and technologies to enhance the performance, accessibility, and maintainability of front-end applications.',
      'Lead the "Road Event Detection" project, utilizing a Leaflet map to display camera locations for monitoring road activity and providing real-time alerts for events such as traffic congestion.',
      'Conduct regular code reviews to maintain high code quality and adherence to best practices.',
      'Participate actively in Agile development processes, contributing to sprint planning, daily stand-ups, and retrospectives.',
      ],
    },
    {
      icon: workIcon,
      date: 'Nov 2020 - Jan 2025',
      title: 'Software Engineer',
      subtitle: 'Futops Technologies India Private Limited, Pune',
      desc: ['Collaborate with design and development teams to translate designs into responsive and interactive front-end code.',
      'Utilize HTML5, CSS3, JavaScript, React.js, React Hooks, and React-Router to build and maintain user interfaces.',
      'Work in Agile environments, participating in sprint planning, daily stand-ups, and retrospectives.',
      'Continuously improve the codebase by adopting best practices for code efficiency and performance.',
      'Conduct regular code reviews to ensure adherence to coding standards and best practices.',
      'Engage with clients to understand their requirements and provide technical guidance and solutions to meet their needs'
      ],
    },
    {
      icon: workIcon,
      date: 'July 2019 - Jan 2020',
      title: 'Associate Software Engineer',
      subtitle: 'Infostretch solution Private Limited, Pune',
      desc: ['Develop customer-facing applications using modern front-end technologies including React.js, React Hooks, React-Router, JavaScript, Styled-components, HTML5, and CSS3.',
        'Assist in the maintenance and support of existing applications by fixing bugs and implementing minor feature enhancements.',
        'Write clean, maintainable, and efficient code adhering to best practices and coding standards.',
        'Work collaboratively with senior developers and cross-functional teams to ensure smooth integration of front-end components.',
        'Participate in team meetings, providing updates on task progress and discussing potential solutions to technical challenges.'
        ],
    }
  ];

  return (
    <ExperienceSection id='experience'>
      <Heading>EXPERIENCE</Heading>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const arrowStyle = { borderRight: '7px solid  rgb(33, 150, 243)' }
          const isExpanded = expanded[i] || false;

          return (
            <VerticalTimelineElement
              key={i}
              className="timeline__experience__vertical-timeline-element"
              contentArrowStyle={arrowStyle}
              {...t.icon}
              date={t.date}
            >
              {t.title && (
                <>
                  <Title>{t.title}</Title>
                  {t.subtitle && (
                    <Subtitle>{t.subtitle}</Subtitle>
                  )}
                  <List>
                    {t.desc.slice(0, isExpanded ? t.desc.length : 2).map((item, idx) => (
                      <ListItem key={idx}>{item}</ListItem>
                    ))}
                  </List>
                  {t.desc.length > 2 && (
                    <ReadMoreButton onClick={() => toggleReadMore(i)}>
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </ReadMoreButton>
                  )}
                </>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </ExperienceSection>
  );
}

export default Experience;