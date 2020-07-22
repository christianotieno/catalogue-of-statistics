import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/generalStatistics.scss';

function GeneralStatistics() {
  const [covidNumbers, setCovidNumbers] = useState({});

  useEffect(() => {
    axios.get('https://api.covid19api.com/summary')
      .then(results => {
        setCovidNumbers(results.data.Global);
      })
      .catch(error => {
        throw error;
      });
  }, []);
  const { NewConfirmed } = covidNumbers;
  const { TotalConfirmed } = covidNumbers;
  const { TotalDeaths } = covidNumbers;
  const { TotalRecovered } = covidNumbers;

  return (
    <div>
      <div className="row">
        <div className="col stats-header">General numbers/statistics globally:</div>
      </div>
      <div className="row">
        <div className="col stats">
          <p>
            New Cases
            {' '}
            <br />
            {' '}
            {NewConfirmed}
          </p>
          <p>
            Confirmed
            {' '}
            <br />
            {TotalConfirmed}
          </p>
          <p>
            Deaths
            {' '}
            <br />
            {TotalDeaths}
          </p>
          <p>
            Recovered
            {' '}
            <br />
            {TotalRecovered}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GeneralStatistics;
