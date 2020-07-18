import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Oceania(props) {
  const { oceania } = props.oceania;
  const country = Object.values(oceania).map(
    value => <li><button type="button" className="btn btn-info">{value}</button></li>,
  );
  const code = Object.keys(oceania).map(key => <li>{key}</li>);
  console.log(code);
  return (
    <div className="countryContainer">
      <h2>Oceania: Click country of choice to view details:</h2>
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
