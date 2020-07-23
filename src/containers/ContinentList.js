import React from 'react';
import '../styles/continentList.scss';
import '../styles/continent.scss';
import { Link } from 'react-router-dom';

function ContinentList() {
  return (
    <div>
      <div className="row">
        <Link to="/africa" className="col continent africa">
          <div />
        </Link>
        <Link to="/asia" className="col continent asia">
          <div />
        </Link>
        <div className="w-100" />
        <Link to="europe" className="col continent europe">
          <div />
        </Link>
        <Link to="/oceania" className="col continent oceania">
          <div />
        </Link>
        <div className="w-100" />
        <Link to="north-america" className="col continent north">
          <div />
        </Link>
        <Link to="south-america" className="col continent south">
          <div />
        </Link>
      </div>
    </div>
  );
}

export default ContinentList;
