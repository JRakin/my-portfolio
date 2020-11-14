import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import Pdf from '../../files/juaid-rakin-resume.pdf';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar py-3 navbar-expand-lg navbar-light">
        <Link
          style={{ color: '#00adb5', fontSize: '22px', fontWeight: '700' }}
          className="navbar-brand"
          to="/"
        >
          Juaid
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link mr-5" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5" to="/#projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5" to="/#blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5" to="/#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                rel="noreferrer"
                className="nav-link btn-resume text-center"
                href={Pdf}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
