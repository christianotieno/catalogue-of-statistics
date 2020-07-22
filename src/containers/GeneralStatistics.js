import React from 'react';
import '../styles/generalStatistics.scss';

function GeneralStatistics() {
  return (
    <div>
      <div className="row">
        <div className="col stats-header">all stats</div>
      </div>
      <div className="row">
        <div className="col stats">
          <p>New Cases</p>
          <p>Confirmed</p>
          <p>Deaths</p>
          <p>Recovered</p>
        </div>
      </div>
    </div>
  );
}

export default GeneralStatistics;
