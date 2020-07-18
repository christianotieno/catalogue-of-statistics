import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Africa(props) {
  const { africa } = props.africa;

  const country = Object.entries(africa).map((
    [key, value],
  ) => (
    <li key={key}>
      <button
        type="button"
        className="btn btn-info"
      >
        {value}
      </button>
    </li>
  ));

  return (
    <div className="countryContainer">
      <h2>Africa:</h2>
      <hr />
      <div>
        <ul className="countryList">
          {country}
        </ul>
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
