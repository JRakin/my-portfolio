import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const BlogDetails = ({ blog }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="col-md-4 p-3 text-center">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div className="card-wrap">
          <div className="project-card p-3">
            <img className="w-75" src={blog.image} alt="" />
            <h6
              className="my-3"
              style={{ fontWeight: '800', textTransform: 'uppercase' }}
            >
              {blog.title}
            </h6>
          </div>
          <div className="details-content d-flex flex-wrap justify-content-center align-items-center">
            <a
              style={{ display: 'block' }}
              className="btn-brand m-2"
              target="_blank"
              rel="noreferrer"
              href={blog.link}
            >
              Read More
            </a>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default BlogDetails;
