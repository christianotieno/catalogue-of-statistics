import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AsianModal from './modals/AsianModal';
import { getContinent } from '../actions/index';
import AfricanModal from './modals/AfricanModal';
import EuropeanModal from './modals/EuropeanModal';
import OceanianModal from './modals/OceanianModal';
import NorthAmericanModal from './modals/NorthAmericanModal';
import SouthAmericanModal from './modals/SouthAmericanModal';
import continentsImages from '../helpers/containers/continentsImages';
import {
  asiaInfo,
  africaInfo,
  europeInfo,
  oceaniaInfo,
  northAmericaInfo,
  southAmericaInfo,
} from '../helpers/continentInfo/contentInfo';

function ContinentList(props) {
  const { continents } = props;
  return (
    <div className="row">
      <div className="row">
        <div className="col dark-backround continentGrid">
          <h2 className="darkHeaderColor">
            {continents.continents[0]}
          </h2>
          <img
            src={continentsImages[0]}
            className="continent-image"
            alt="asia"
          />
          <p>{asiaInfo}</p>
          <AsianModal />
        </div>
        <div className="col darker-backround continentGrid">
          <h2 className="lightHeaderColor">
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
          <h2 className="lightHeaderColor">
            {continents.continents[2]}
          </h2>
          <img
            src={continentsImages[2]}
            className="continent-image"
            alt="europe"
          />
          <p>{europeInfo}</p>
          <EuropeanModal />
        </div>
        <div className="col dark-backround continentGrid">
          <h2 className="darkHeaderColor">
            {continents.continents[3]}
          </h2>
          <img
            src={continentsImages[3]}
            className="continent-image"
            alt="oceania"
          />
          <p>{oceaniaInfo}</p>
          <OceanianModal />
          <br />
        </div>
      </div>

      <div className="row">
        <div className="col dark-backround continentGrid">
          <h2 className="darkHeaderColor">
            {continents.continents[4]}
          </h2>
          <img
            src={continentsImages[4]}
            className="continent-image"
            alt="northAmerica"
          />
          <p>{northAmericaInfo}</p>
          <NorthAmericanModal />

        </div>
        <div className="col darker-backround continentGrid">
          <h2 className="lightHeaderColor">
            {continents.continents[5]}
          </h2>
          <img
            src={continentsImages[5]}
            className="continent-image"
            alt="southAmerica"
          />
          <p>{southAmericaInfo}</p>
          <SouthAmericanModal />

          <br />
        </div>
      </div>
    </div>
  );
}

ContinentList.prototype = {

};

ContinentList.propTypes = {
  continents: PropTypes.objectOf(PropTypes.object).isRequired,
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
