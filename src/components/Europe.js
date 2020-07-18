import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Europe(props) {
  const { europe } = props.europe;
  const country = Object.values(europe).map(
    value => <li><button type="button" className="btn btn-info">{value}</button></li>,
  );
  const code = Object.keys(europe).map(key => <li>{key}</li>);
  console.log(code);
  return (
    <div className="countryContainer">
      <h2>Europe: Click country of choice to view details:</h2>
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
  europe: state.europe,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Europe);
