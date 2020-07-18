import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/index';

function SouthAmerica(props) {
  const { southAmerica } = props.southAmerica;

  const country = Object.entries(southAmerica).map((
    [key, value],
  ) => (

    <button
      key={key}
      type="button"
      className="list-group-item list-group-item-action"
    >
      {value}
      <button
        type="button"
        className="statsCaller btn btn-info float-right"
      >
        Check Statistics
      </button>
    </button>

  ));

  return (
    <div>
      <div className="list-group">
        {country}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  southAmerica: state.southAmerica,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SouthAmerica);
