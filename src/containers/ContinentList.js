import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import { getContinent } from '../actions/index';

function ContinentList(props) {
  const { continents } = props;
  return (
    <div>
      <div className="africaContainer" id="africaContainer">
        <h2>
          {continents[0]}
          &apos;s container
        </h2>
      </div>
      <div className="allStats" id="allStats">
        <h2 id="statsHeader">Official Statistics:</h2>
      </div>
      <div className="stats" id="stats">
        <div id="statsItems">
          <p className="text-fluid">
            100282
            <br />
            New Confirmed
          </p>
          <p className="text-fluid">
            1162857
            <br />
            Total Confirmed
          </p>
          <p className="text-fluid">
            5658
            <br />
            New Deaths
          </p>
          <p className="text-fluid">
            63263
            <br />
            Total Deaths
          </p>
          <p className="text-fluid">
            15405
            <br />
            New Recovered
          </p>
          <p className="text-fluid">
            230845
            <br />
            Total Recovered
          </p>
        </div>
      </div>
      <div className="continentlistContainer">
        <div
          className="asiaGrid"
          id="asiaGrid"
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents[1]}
            &apos;s Grid
          </h2>

        </div>
        <div
          className="northAmericaGrid"
          id="northAmericaGrid"
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents[2]}
            &apos;s Grid
          </h2>
        </div>
        <div
          className="southAmericaGrid"
          id="southAmericaGrid"
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents[3]}
            &apos;s Grid
          </h2>
        </div>
        <div
          className="antarcticaGrid"
          id="antarcticaGrid"
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents[4]}
            &apos;s Grid
          </h2>
        </div>
        <div
          className="europeGrid"
          id="europeGrid"
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents[5]}
            &apos;s Grid
          </h2>
        </div>
        <div
          className="australiaGrid"
          id="australiaGrid"
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents[6]}
            &apos;s Grid
          </h2>
        </div>
      </div>
    </div>
  );
}

ContinentList.prototype = {
  continents: PropTypes.instanceOf(array).isRequired,
};

const mapStateToProps = state => ({
  continents: state.continents,
});

const mapDispatchToProps = dispatch => ({
  getContinent: () => dispatch(getContinent()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContinentList);
