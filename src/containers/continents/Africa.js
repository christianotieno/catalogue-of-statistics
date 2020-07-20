import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/index';
import CountryStatModal from '../CountryStatModal';

function Africa(props) {
  const { africa } = props.africa;

  const country = Object.entries(africa).map((
    [key, value],
  ) => (
    <button
      key={key}
      // id={key}
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
  // console.log(country);

  return (
    <div>
      <div className="list-group">
        {country}
      </div>
    </div>
  );
}

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
