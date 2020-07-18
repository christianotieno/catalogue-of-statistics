import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import AsianModal from './modals/AsianModal';
import { getContinent } from '../actions/index';
import AfricanModal from './modals/AfricanModal';
import EuropeanModal from './modals/EuropeanModal';
import OceanianModal from './modals/OceanianModal';
import africaInfo from '../helpers/continentInfo/africa';
import NorthAmericanModal from './modals/NorthAmericanModal';
import SouthAmericanModal from './modals/SouthAmericanModal';
import continentsImages from '../helpers/containers/continentsImages';

function ContinentList(props) {
  const { continents } = props;
  return (
    <div className="row">
      <div className="stats col" id="statsItems">
        <marquee>
          <p className="font-weight-bold text-uppercase">
            New confirmed: 100282.&nbsp;&nbsp;&nbsp;
            Total confirmed: 1162857.&nbsp;&nbsp;&nbsp;
            New deaths: 5658.&nbsp;&nbsp;&nbsp;
            Total deaths: 63263.&nbsp;&nbsp;&nbsp;
            New recovered: 15405.&nbsp;&nbsp;&nbsp;
            Total recovered: 230845.
          </p>
        </marquee>
      </div>

      <div className="row">
        <div className="col dark-backround continentGrid">
          <h2>
            {continents.continents[0]}
          </h2>
          <img
            src={continentsImages[0]}
            className="continent-image"
            alt="asia"
          />
          <p>{africaInfo}</p>
          <AsianModal />
        </div>
        <div className="col darker-backround continentGrid">
          <h2>
            {continents.continents[1]}
          </h2>
          <img
            src={continentsImages[1]}
            className="continent-image img-fluid"
            alt="africa"
          />
          <p>{africaInfo}</p>
          <AfricanModal />
          <br />
        </div>
      </div>

      <div className="row">
        <div className="col darker-backround continentGrid">
          <h2>
            {continents.continents[2]}
          </h2>
          <img
            src={continentsImages[2]}
            className="continent-image"
            alt="europe"
          />
          <p>{africaInfo}</p>
          <EuropeanModal />
        </div>
        <div className="col dark-backround continentGrid">
          <h2>
            {continents.continents[3]}
          </h2>
          <img
            src={continentsImages[3]}
            className="continent-image"
            alt="oceania"
          />
          <p>{africaInfo}</p>
          <OceanianModal />
          <br />
        </div>
      </div>

      <div className="row">
        <div className="col dark-backround continentGrid">
          <h2>
            {continents.continents[4]}
          </h2>
          <img
            src={continentsImages[4]}
            className="continent-image"
            alt="northAmerica"
          />
          <p>{africaInfo}</p>
          <NorthAmericanModal />

        </div>
        <div className="col darker-backround continentGrid">
          <h2>
            {continents.continents[5]}
          </h2>
          <img
            src={continentsImages[5]}
            className="continent-image"
            alt="southAmerica"
          />
          <p>{africaInfo}</p>
          <SouthAmericanModal />

          <br />
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
