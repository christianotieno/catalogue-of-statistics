import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountry } from '../../actions/index';
import CountryStatModal from '../CountryStatModal';

function NorthAmerica(props) {
  const { northAmerica } = props;

  const country = Object.entries(northAmerica.northAmerica).map((
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
