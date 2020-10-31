import React from 'react';
import './Banner.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Pdf from '../../files/juaid-rakin-resume.pdf';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

library.add(faFacebook, faLinkedin, faGithub);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '50%',
    border: 'none',
    backgroundColor: '#effcef',
    boxShadow: '2px 2px 6px lightgray',
    padding: '30px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Banner = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'juaid_gmail',
        'template_4pba89u',
        e.target,
        'user_hwFBM31Qh6vDmag4ZqCQS'
      )
      .then(
        (result) => {
          Swal.fire('Okay', 'Email sent successfully!', 'success');
          e.target.reset();
          setIsOpen(false);
        },
        (error) => {
          Swal.fire('Sorry', 'Something went wrong!', 'warning');
        }
      );
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ paddingTop: '50px', paddingBottom: '100px' }}
      >
        <div className="py-4">
          <h1 style={{ fontSize: '50px', fontWeight: '700', color: '#21bf73' }}>
            Juaid Rakin
          </h1>
          <h3 style={{ fontWeight: '700' }}>
            Engineer || Web Developer || Programmer
          </h3>
          <div className="social-icons">
            <ul className="d-flex p-0 justify-content-center">
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
          <div>
            <button onClick={openModal} className="btn-brand mr-3">
              Get In Touch
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              ariaHideApp={false}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-control"
                    placeholder="Email Address *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control"
                    placeholder="Name *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    required
                    className="form-control"
                    placeholder="Subject *"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    required
                    className="form-control"
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="Message *"
                  ></textarea>
                </div>
                <div className="form-group text-center">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-brand "
                  />
                </div>
              </form>
            </Modal>
            <a
              target="_blank"
              rel="noreferrer"
              className="btn-brand"
              href={Pdf}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
