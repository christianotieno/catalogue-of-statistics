import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Europe(props) {
  const { europe } = props.europe;
  const country = Object.values(europe).map(value => <li>{value}</li>);
  const code = Object.keys(europe).map(key => <li>{key}</li>);
  console.log(code);
  return (
    <div>
      <h2>European Continent</h2>
      <ul>{country}</ul>
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
