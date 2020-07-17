import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Continent(props) {
  const { africa } = props.africa;
  const country = Object.values(africa).map(value => <li>{value}</li>);
  const code = Object.keys(africa).map(key => <li>{key}</li>);
  console.log(code);
  return (
    <div>
      <h2>Africa Continent</h2>
      <ul>{country}</ul>
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
)(Continent);
