import React from 'react';
import twitter from '../assets/img/socialIcons/twitter.png';
import linkedin from '../assets/img/socialIcons/linkedin.png';
import github from '../assets/img/socialIcons/github.png';

function Footer() {
  return (
    <div>

      <footer className="page-footer font-small">

        <div className="footer-copyright text-center py-3 d-flex justify-content-around">
          {/* <h2>
            <a href="/"> christianotieno </a>
          </h2>
          &nbsp;&nbsp; */}
          <img
            src={twitter}
            alt="twtter"
            className="img-fluid social"
          />
          &nbsp;&nbsp;
          <img
            src={github}
            alt="github"
            className="img-fluid social"
          />
          &nbsp;&nbsp;
          <img
            src={linkedin}
            alt="linkedin"
            className="img-fluid social"
          />
        </div>

      </footer>

    </div>
  );
}

export default Footer;
