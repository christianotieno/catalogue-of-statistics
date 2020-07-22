import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/index';
import ContinentStatistics from '../ContinentStatistics';
import CountryStatsModal from '../CountryStatModal';

function Africa(props) {
  const { africa } = props;

  const country = Object.entries(africa.africa).map((
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
        <div className="col nav continent-header"><h1>Africa</h1></div>
      </div>

      <div className="row">
        <div className="col main-continent africa-page" />
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

Africa.propTypes = {
  africa: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  africa: state.africa,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Africa);
