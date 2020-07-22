import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/index';
import ContinentStatistics from '../ContinentStatistics';
import CountryStatsModal from '../CountryStatModal';

function NorthAmerica(props) {
  const { northAmerica } = props;

  const country = Object.entries(northAmerica.northAmerica).map((
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
        <div className="col nav continent-header"><h1>North America</h1></div>
      </div>

      <div className="row">
        <div className="col main-continent north-america-page" />
      </div>
      <ContinentStatistics />
      <div className="row">
        <div className="col">
          <div className="country">{country}</div>
        </div>
      </div>
    </div>
  );
}

NorthAmerica.propTypes = {
  northAmerica: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  northAmerica: state.northAmerica,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NorthAmerica);
