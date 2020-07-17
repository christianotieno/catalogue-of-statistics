import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function SouthAmerica(props) {
  const { southAmerica } = props.southAmerica;
  const country = Object.values(southAmerica).map(value => <li>{value}</li>);
  const code = Object.keys(southAmerica).map(key => <li>{key}</li>);
  console.log(code);
  return (
    <div>
      <h2>South American Continent</h2>
      <ul>{country}</ul>
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
