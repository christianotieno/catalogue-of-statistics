import React from 'react';

function ContinentStatistics() {
  return (
    <div>
      <div className="row">
        <div className="col stats-header">all stats</div>
      </div>

      <div className="row">
        <div className="col stats">
          <p>New Confirmed</p>
          <p>Confirmed</p>
          <p>Recovered</p>
          <p>Dead</p>
        </div>
      </div>
    </div>
  );
}

export default ContinentStatistics;
