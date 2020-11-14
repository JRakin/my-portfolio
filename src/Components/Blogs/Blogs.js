import React from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import Fade from 'react-reveal/Fade';

const Blogs = () => {
  const blogData = [
    {
      id: '1001',
      title: 'Javascript String Methods You Should Know.',
      link:
        'https://juaidrakin1.medium.com/introduction-about-string-functions-in-javascript-b93ae01f87e',
      image:
        'https://i.ibb.co/S7LGw06/artem-sapegin-DErx-VSSQNd-M-unsplash.jpg',
    },
    {
      id: '1002',
      title: 'Hoisting, Block Scoping, Arrow Function and Spread Operator.',
      link:
        'https://juaidrakin1.medium.com/hoisting-block-level-scoping-arrow-function-dfbf948c92ac',
      image:
        'https://i.ibb.co/YhW38kX/javascript-minimalism-wallpaper-preview.jpg',
    },
  ];

  return (
    <div id="blogs">
      <div className="container">
        <Fade left>
          <h1
            className="text-center p-3 mt-2"
            style={{ color: '#00adb5', fontWeight: '700' }}
          >
            Blogs
          </h1>
          <div className="row p-4">
            {blogData.map((blog) => (
              <BlogDetails key={blog.id} blog={blog}></BlogDetails>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Blogs;
