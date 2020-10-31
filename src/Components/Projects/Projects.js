import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      id: '101',
      name: 'creative agency',
      description:
        'Creative agency is a full-stack IT service selling application. Where user can order a service. Both user and admin has an interactive dashboard. Admin can manage service and orders. Implemented User Interface with react.js, react-spring and bootstrap.',
      technology: [
        'react.js',
        'express.js',
        'mongodb',
        'firebase-authentication',
      ],
      image: 'https://i.ibb.co/kJZFW2F/Capture2.png',
      live: 'https://creative-agency-bdesh.web.app/',
      gitHub: 'https://github.com/JRakin/creative-agency',
    },
    {
      id: '102',
      name: 'volunteer network',
      description:
        'Volunteer Network is a full-stack web application. Where user can register to a volunteer service. Both user and admin has an interactive dashboard. Admin can manage service and orders. Implemented User Interface with react.js and bootstrap.',
      technology: [
        'react.js',
        'express.js',
        'mongodb',
        'firebase-authentication',
      ],
      image: 'https://i.ibb.co/1KPmG5w/Capture.png',
      live: 'https://volunteer-network-jr.web.app/',
      gitHub: 'https://github.com/JRakin/volunteer-network',
    },
    {
      id: '103',
      name: 'travel guru',
      description:
        'Travel Guru is MERN stack tour management web application. Where user can book a tour. Admin can manage tours and has an interactive dashboard. Implemented User Interface with react.js and bootstrap.',
      technology: [
        'react.js',
        'express.js',
        'mongodb',
        'firebase-authentication',
      ],
      image: 'https://i.ibb.co/6yX8VPp/Capture1.png',
      live: 'https://travel-guru-juaid.web.app/',
      gitHub: 'https://github.com/JRakin/my-travel-guru',
    },
  ];
  return (
    <div className="project-container">
      <div className="container">
        <h1
          className="text-center p-3 mt-3"
          style={{ color: '#21bf73', fontWeight: '700' }}
        >
          Projects
        </h1>
        <div className="row p-4">
          {projectData.map((project) => (
            <ProjectDetails project={project} key={project.id}></ProjectDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
