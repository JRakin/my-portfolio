import React from 'react';
import { useSpring, animated } from 'react-spring';
import './ProjectDetails.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    height: '60%',
    width: '50%',
    backgroundColor: '#effcef',
    boxShadow: '2px 2px 6px lightgray',
    padding: '30px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProjectDetails = ({ project }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-4 p-3 text-center">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div className="card-wrap">
          <div className="project-card p-3">
            <img className="w-75" src={project.image} alt="" />
            <h5
              className="my-3"
              style={{ fontWeight: '800', textTransform: 'uppercase' }}
            >
              {project.name}
            </h5>
          </div>
          <div className="details-content d-flex justify-content-center align-items-center">
            <button onClick={openModal} className="btn-brand">
              Learn more
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              ariaHideApp={false}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="show-modal-details p-4 text-center">
                <h2
                  className="my-3"
                  style={{ fontWeight: '800', textTransform: 'uppercase' }}
                >
                  {project.name}
                </h2>
                <img className="w-100" src={project.image} alt="" />
                <div>
                  <p className="p-3">{project.description}</p>

                  <ul className="d-flex p-3 justify-content-center text-center technology-items">
                    {project.technology.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div>
                    <a
                      className="btn-brand mr-3"
                      target="_blank"
                      rel="noreferrer"
                      href={project.live}
                    >
                      Live Site
                    </a>
                    <a
                      className="btn-brand mr-3"
                      target="_blank"
                      rel="noreferrer"
                      href={project.gitHub}
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default ProjectDetails;
