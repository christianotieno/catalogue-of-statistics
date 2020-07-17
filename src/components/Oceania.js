import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Oceania(props) {
  const { oceania } = props.oceania;
  const country = Object.values(oceania).map(value => <li>{value}</li>);
  const code = Object.keys(oceania).map(key => <li>{key}</li>);
  console.log(code);
  return (
    <div>
      <h2>Oceanian Continent</h2>
      <ul>{country}</ul>
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
