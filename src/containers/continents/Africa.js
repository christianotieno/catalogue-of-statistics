import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountry } from '../../actions/index';
import CountryStatModal from '../CountryStatModal';

function Africa(props) {
  const { africa } = props;

  const country = Object.entries(africa.africa).map((
    [key, value],
  ) => (
    <div
      key={key}
      id={key}
      type="button"
      className="list-group-item list-group-item-action"
    >
      {value}
      <div
        className="float-right"
      >
        <CountryStatModal id={key} value={value} />
      </div>
    </div>
  ));

  return (
    <div>
      <div className="list-group">
        {country}
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
