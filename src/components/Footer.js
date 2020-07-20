import React from 'react';
import twitter from '../assets/img/socialIcons/twitter.png';
import linkedin from '../assets/img/socialIcons/linkedin.png';
import github from '../assets/img/socialIcons/github.png';

function Footer() {
  return (
    <div>

      <footer className="page-footer font-small">

        <div className="footer-copyright text-center py-3 d-flex justify-content-around">
          <a
            href="https://twitter.com/iamchrisotieno"
            target="_blank"
            rel="noreferrer"
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
            rel="noreferrer"
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
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="img-fluid social"
            />

          </a>
        </div>

      </footer>

    </div>
  );
}

export default Footer;
