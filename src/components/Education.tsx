import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap, faSchool} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const EducationSection = styled.section`
  padding: 2rem;
  background-color: #EEF8E8;
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
  font-weight: normal;
  color: #bfbfbf;
`;

const school = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};

const college = {
  icon: <FontAwesomeIcon icon={faGraduationCap} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};

const Experience: React.FC = () => {  
    const timeline = [
    {
      icon: college,
      date: 'Sept 2016 - May 2019',
      title: 'Bachelor of Engineering in Computer Technology',
      subtitle: 'Yeshwantrao Chavan College of Engineering, Nagpur',
    },
    {
      icon: school,
      date: 'Aug 2013 - April 2016',
      title: 'Diploma in Computer Engineering',
      subtitle: 'Anjuman Polytechnic, Nagpur'
    },
    {
      icon: school,
      date: 'July 2012 - March 2013',
      title: 'Secondary School Certificate',
      subtitle: 'Gayatri English High School'
      
    }
  ];

  return (
    <EducationSection id='education'>
        <Heading>EDUCATION</Heading>
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
                </>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </EducationSection>
  );
}

export default Experience;