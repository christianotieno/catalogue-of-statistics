import React from 'react';
import '../styles/homePage.scss';
import GeneralStatistics from '../containers/GeneralStatistics';
import ContinentList from '../containers/ContinentList';

function HomePage() {
  return (
    <div>
      <div className="row">
        <div className="col main-div">
          <div className="header-div">
            <h3>
              To easily navigate this page, click on the continents icons below:
            </h3>
          </div>
        </div>
      </div>
      <GeneralStatistics />
      <ContinentList />
    </div>
  );
}

export default HomePage;
