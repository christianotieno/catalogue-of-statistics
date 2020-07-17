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
          className="infoGrid"
          id="infoGrid"
        >
          <h2>
            General Info
          </h2>
        </div>

        <div
          className="asiaGrid"
          id="asiaGrid"
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents.continents[1]}
            &apos;s numbers:
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
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents.continents[1]}
            &apos;s numbers:
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
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents.continents[2]}
            &apos;s numbers:
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
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents.continents[3]}
            &apos;s numbers:
          </h2>
          <img
            src={continentsImages[3]}
            className="continent-image"
            alt="oceania"
          />
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
            {continents.continents[4]}
            &apos;s numbers:
          </h2>
          <img
            src={continentsImages[4]}
            className="continent-image"
            alt="antarctica"
          />
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
            {continents.continents[5]}
            &apos;s numbers:
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
          onClick={() => getContinent}
          onKeyDown={() => getContinent()}
          role="button"
          tabIndex={0}
        >
          <h2>
            {continents.continents[6]}
            &apos;s numbers:
          </h2>
          <img
            src={continentsImages[6]}
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
