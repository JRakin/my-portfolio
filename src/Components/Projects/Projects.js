import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Projects.css';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  const projectData = [
    {
      id: '101',
      name: 'creative agency',
      description:
        'Creative agency is a full-stack IT service selling application.',
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
      description: 'Volunteer Network is a full-stack web application.',
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
      description: 'Travel Guru is MERN stack tour management web application.',
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
    <div id="projects" className="project-container my-5 p-4">
      <div className="container">
        <Fade left>
          <h1
            className="text-center p-3 mt-3"
            style={{ color: '#21bf73', fontWeight: '700' }}
          >
            Projects
          </h1>

          <div className="row p-4">
            {projectData.map((project) => (
              <ProjectDetails
                project={project}
                key={project.id}
              ></ProjectDetails>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
