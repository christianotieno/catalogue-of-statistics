import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import { getContinent } from '../actions/index';
import continentsImages from '../helpers/containers/continentsImages';

function ContinentList(props) {
  const { continents } = props;
  return (
    <div>
      <div
        className="statsContainer"
        id="statsContainer"
      >
        <h2>
          <div className="stats" id="stats">
            <div id="statsItems">
              <marquee>
                <p className="text-fluid">
                  New confirmed: 100282 |
                  Total confirmed: 1162857 |
                  New deaths: 5658 |
                  Total deaths: 63263 |
                  New recovered: 15405 |
                  Total recovered: 230845
                </p>
              </marquee>
            </div>
          </div>
        </h2>
      </div>
      <div className="continentlistContainer">
        <div
          className="asiaGrid"
          id="asiaGrid"
        >
          <h2>
            {continents.continents[0]}
          </h2>
          <img
            src={continentsImages[0]}
            className="continent-image"
            alt="asia"
          />
        </div>

        <div
          className="africaGrid"
          id="africaGrid"
        >
          <h2>
            {continents.continents[1]}
          </h2>
          <img
            src={continentsImages[1]}
            className="continent-image"
            alt="africa"
          />
        </div>

        <div
          className="europeGrid"
          id="europeGrid"
        >
          <h2>
            {continents.continents[2]}
          </h2>
          <img
            src={continentsImages[2]}
            className="continent-image"
            alt="europe"
          />
        </div>

        <div
          className="oceaniaGrid"
          id="oceaniaGrid"
        >
          <h2>
            {continents.continents[3]}
          </h2>
          <img
            src={continentsImages[3]}
            className="continent-image"
            alt="oceania"
          />
        </div>

        <div
          className="northAmericaGrid"
          id="northAmericaGrid"
        >
          <h2>
            {continents.continents[4]}
          </h2>
          <img
            src={continentsImages[5]}
            className="continent-image"
            alt="northAmerica"
          />
        </div>

        <div
          className="southAmericaGrid"
          id="southAmericaGrid"
        >
          <h2>
            {continents.continents[5]}
          </h2>
          <img
            src={continentsImages[5]}
            className="continent-image"
            alt="southAmerica"
          />
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