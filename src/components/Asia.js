import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';

function Asia(props) {
  const { asia } = props.asia;
  const country = Object.values(asia).map(
    value => <li><button type="button" className="btn btn-info">{value}</button></li>,
  );
  const code = Object.keys(asia).map(key => <li>{key}</li>);
  console.log(code);
  return (
    <div className="countryContainer">
      <h2>Asia:</h2>
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
  asia: state.asia,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Asia);
