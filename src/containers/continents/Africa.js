import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/index';
import CountryStatModal from '../CountryStat';

function Africa(props) {
  const { africa } = props.africa;

  const key = Object.keys(africa);
  console.log(key);
  const country = Object.entries(africa).map((
    [key, value],
  ) => (
    <button
      key={key}
      type="button"
      className="list-group-item list-group-item-action"
    >
      {value}
      <div
        className="float-right"
      >
        <CountryStatModal key={key} />
      </div>
    </button>
  ));
  console.log(country);

  return (
    <div>
      <div className="list-group">
        {country}
      </div>
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
)(Africa);
