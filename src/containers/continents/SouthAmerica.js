import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/index';
import CountryStatsModal from '../CountryStatModal';
import GeneralStatistics from '../GeneralStatistics';

function SouthAmerica(props) {
  const { southAmerica } = props;

  const country = Object.entries(southAmerica.southAmerica).map((
    [key, value],
  ) => (
    <div
      key={key}
      id={key}
      className="list-group-item list-group-item-action"
    >
      {value}
      <div
        className="float-right"
      >
        <CountryStatsModal id={key} value={value} />
      </div>
    </div>
  ));

  return (
    <div>
      <div className="row">
        <div className="col nav continent-header"><h1>South America</h1></div>
      </div>

      <div className="row">
        <div className="col main-continent south-america-page" />
      </div>
      <GeneralStatistics />
      <div className="row">
        <div className="col">
          <div className="country">{country}</div>
        </div>
      </div>
    </div>
  );
}

SouthAmerica.propTypes = {
  southAmerica: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  southAmerica: state.southAmerica,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SouthAmerica);
