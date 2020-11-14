import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container" style={{ height: '300px' }}>
      <div className="container my-5 p-4 text-center">
        <div className="social-icons mt-5 pt-4">
          <ul className="d-flex p-0 justify-content-center">
            <li>
              <a
                className="linkedin text-white"
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
                className="github text-white"
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
                className="medium text-white"
                target="_blank"
                rel="noreferrer"
                href="https://juaidrakin1.medium.com/"
              >
                <FontAwesomeIcon
                  className="social-icon"
                  icon={['fab', 'medium']}
                />
              </a>
            </li>
            <li>
              <a
                className="facebook text-white"
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

        <small className="d-flex justify-content-center">
          &copy;All Rights Reserved. Juaid Rakin {new Date().getFullYear()}
        </small>
      </div>
    </div>
  );
};

export default Footer;
