import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function NorthAmerica(props) {
  const { northAmerica } = props.northAmerica;
  const country = Object.values(northAmerica).map(value => <li>{value}</li>);
  const code = Object.keys(northAmerica).map(key => <li>{key}</li>);
  return (
    <div>
      <h2>North American Continent</h2>
      <ul>{country}</ul>
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
