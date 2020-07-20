import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountry } from '../../actions/index';
import CountryStatModal from '../CountryStatModal';

function SouthAmerica(props) {
  const { southAmerica } = props;

  const country = Object.entries(southAmerica.southAmerica).map((
    [key, value],
  ) => (

    <button
      key={key}
      type="button"
      className="list-group-item list-group-item-action"
    >
      {value}
      <div
        className="float-right"
      >
        <CountryStatModal id={key} value={value} />
      </div>
    </button>

  ));

  return (
    <div>
      <div className="list-group">
        {country}
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