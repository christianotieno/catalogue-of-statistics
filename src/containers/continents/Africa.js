import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/index';
import CountryStatModal from '../CountryStatModal';
import GeneralStatistics from '../GeneralStatistics';

function Africa(props) {
  const { africa } = props;

  const country = Object.entries(africa.africa).map((
    [key, value],
  ) => (
    <li
      key={key}
      id={key}
      className="list-group-item list-group-item-action"
    >
      {value}
      <div
        className="float-right"
      >
        <CountryStatModal id={key} value={value} />
      </div>
    </li>
  ));

  return (
    <div>
      <div className="row">
        <div className="col nav continent-header"><h1>Africa</h1></div>
      </div>

      <div className="row">
        <div className="col main-continent africa-page" />
      </div>
      <GeneralStatistics />
      <div className="row">
        <div className="col">
          <ul className="country">{country}</ul>
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
