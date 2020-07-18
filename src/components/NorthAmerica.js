import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function NorthAmerica(props) {
  const { northAmerica } = props.northAmerica;
  const country = Object.values(northAmerica).map(
    value => <li><button type="button" className="btn btn-info">{value}</button></li>,
  );
  const code = Object.keys(northAmerica).map(key => <li>{key}</li>);
  console.log(code);
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
