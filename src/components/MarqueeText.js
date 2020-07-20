import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MarqueeText() {
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
  const { NewDeaths } = covidNumbers;
  const { TotalDeaths } = covidNumbers;
  const { NewRecovered } = covidNumbers;
  const { TotalRecovered } = covidNumbers;

  return (
    <div className="stats col" id="statsItems">
      <marquee>
        <p className="font-weight-bold text-uppercase">
          New confirmed:
          {' '}
          {NewConfirmed}
          &nbsp;&nbsp;&nbsp;
          Total confirmed:
          {' '}
          {TotalConfirmed}
          &nbsp;&nbsp;&nbsp;
          New deaths:
          {' '}
          {NewDeaths}
          &nbsp;&nbsp;&nbsp;
          Total deaths:
          {' '}
          {TotalDeaths}
          &nbsp;&nbsp;&nbsp;
          New recovered:
          {' '}
          {NewRecovered}
          &nbsp;&nbsp;&nbsp;
          Total recovered:
          {' '}
          {TotalRecovered}
        </p>
      </marquee>
    </div>
  );
}

export default MarqueeText;
