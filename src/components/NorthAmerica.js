import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function NorthAmerica(props) {
  const { northAmerica } = props.northAmerica;

  const country = Object.entries(northAmerica).map((
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
      <h2>North America:</h2>
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
  northAmerica: state.northAmerica,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NorthAmerica);
