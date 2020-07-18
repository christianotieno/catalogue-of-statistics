import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Oceania(props) {
  const { oceania } = props.oceania;

  const country = Object.entries(oceania).map((
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
      <h2>Oceania:</h2>
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
  oceania: state.oceania,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Oceania);
