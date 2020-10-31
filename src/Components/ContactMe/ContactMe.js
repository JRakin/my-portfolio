import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contactMe">
      <div>
        <form action="">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address *"
            />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name *" />
          </div>
          <div className="form-group">
            <textarea
              name=""
              className="form-control"
              id=""
              cols="30"
              rows="10"
              placeholder="Message *"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-brand">
              {' '}
              Submit{' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
