import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Projects></Projects>
      <About></About>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
