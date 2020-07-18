import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Europe(props) {
  const { europe } = props.europe;

  const country = Object.entries(europe).map((
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
      <h2>Europe:</h2>
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
  europe: state.europe,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Europe);
