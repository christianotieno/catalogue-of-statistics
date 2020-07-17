import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Asia(props) {
  const { asia } = props.asia;
  const country = Object.values(asia).map(value => <li>{value}</li>);
  const code = Object.keys(asia).map(key => <li>{key}</li>);
  console.log(code);
  return (
    <div>
      <h2>Asian Continent</h2>
      <ul>{country}</ul>
    </div>
  );
}

const mapStateToProps = state => ({
  asia: state.asia,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Asia);
