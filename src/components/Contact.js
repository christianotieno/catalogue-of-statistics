import React from 'react';
import twitter from '../assets/img/socialIcons/twitter.png';
import github from '../assets/img/socialIcons/github.png';
import linkedin from '../assets/img/socialIcons/linkedin.png';

function Contact() {
  return (
    <div>
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact-title clearfix">
                <h1 className="header-tag">
                  Contact
                  {' '}
                  <span>Me</span>
                </h1>
                <div className="text-center py-3 d-flex justify-content-around">
                  <a
                    href="https://twitter.com/iamchrisotieno"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={twitter}
                      alt="twtter"
                      className="img-fluid social"
                    />

                  </a>
          &nbsp;&nbsp;
                  <a
                    href="https://github.com/christianotieno/react-covid19-catalogue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      alt="github"
                      className="img-fluid social"
                    />

                  </a>
          &nbsp;&nbsp;
                  <a
                    href="https://www.linkedin.com/in/christianotieno/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="img-fluid social"
                    />
                  </a>
                  <div className="email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;
