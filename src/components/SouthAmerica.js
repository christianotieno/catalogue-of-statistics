import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function SouthAmerica(props) {
  const { southAmerica } = props.southAmerica;
  const country = Object.values(southAmerica).map(
    value => <li><button type="button" className="btn btn-info">{value}</button></li>,
  );
  const code = Object.keys(southAmerica).map(key => <li>{key}</li>);
  console.log(code);
  return (
    <div className="countryContainer">
      <h2>South America:</h2>
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
  southAmerica: state.southAmerica,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SouthAmerica);
