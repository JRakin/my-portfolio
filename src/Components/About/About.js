import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Me from '../../images/IMG_6862.JPG';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div id="about" className="my-5 p-5" style={{ backgroundColor: '#f7fbe1' }}>
      <div className="container">
        <Fade up>
          <h1
            className="text-center mt-2"
            style={{ color: '#21bf73', fontWeight: '700' }}
          >
            About Juaid
          </h1>

          <div className="row">
            <div className="col-md-6 p-3">
              <img className=" w-50 rounded" src={Me} alt="" />
              <div className="social-icons">
                <ul className="d-flex p-0">
                  <li>
                    <a
                      className="linkedin"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/juaid-rakin/"
                    >
                      <FontAwesomeIcon
                        className="social-icon"
                        icon={['fab', 'linkedin']}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="github"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/JRakin"
                    >
                      <FontAwesomeIcon
                        className="social-icon"
                        icon={['fab', 'github']}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="facebook"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/juaid.rakin/"
                    >
                      <FontAwesomeIcon
                        className="social-icon"
                        icon={['fab', 'facebook']}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <h1 style={{ fontSize: '44px' }} className="my-2">
                Hello, This is Juaid.
              </h1>
              <p style={{ fontSize: '18px' }}>
                Juaid has a passion for web development. He is currently working
                with <span className="font-weight-bold">react.js</span> and{' '}
                <span className="font-weight-bold">node.js</span>. Juaid
                initially loved <span className="font-weight-bold">java</span>{' '}
                but end up being a{' '}
                <span className="font-weight-bold">MERN</span> stack developer.
                Juaid loves to solve problems.
              </p>
            </div>
            <div className="col-md-6 p-3">
              <h2 className="text-center mb-3">
                Skills <span style={{ color: '#21bf73' }}>Juaid</span> Have
              </h2>
              <div className="row skills p-1 d-flex">
                <div className="col-md-4">
                  <h5>Languages:</h5>
                </div>
                <div className="col-md-8">
                  <ul className="d-flex flex-wrap px-3">
                    <li>Javascript</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>ES6</li>
                  </ul>
                </div>
              </div>
              <div className="row skills p-1 d-flex">
                <div className="col-md-4">
                  <h5>Frameworks & Libraries:</h5>
                </div>
                <div className="col-md-8">
                  <ul className="d-flex flex-wrap px-3">
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>React-Spring</li>
                    <li>Mongoose</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                  </ul>
                </div>
              </div>
              <div className="row skills p-1 d-flex">
                <div className="col-md-4">
                  <h5>Tools & Technologies:</h5>
                </div>
                <div className="col-md-8">
                  <ul className="d-flex flex-wrap px-3">
                    <li>npm</li>
                    <li>Firebase</li>
                    <li>VSCode</li>
                    <li>Git</li>
                    <li>Google API</li>
                    <li>Postman</li>
                    <li>Linux</li>
                  </ul>
                </div>
              </div>
              <div className="row skills p-1 d-flex">
                <div className="col-md-4">
                  <h5>Modeling:</h5>
                </div>
                <div className="col-md-8">
                  <ul className="d-flex flex-wrap px-3">
                    <li>OOP</li>
                    <li>Design Pattern</li>
                  </ul>
                </div>
              </div>
              <div className="row skills p-1 d-flex">
                <div className="col-md-4">
                  <h5>Database:</h5>
                </div>
                <div className="col-md-8">
                  <ul className="d-flex flex-wrap px-3">
                    <li>MongoDB</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
