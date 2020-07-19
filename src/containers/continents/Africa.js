import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/index';

function Africa(props) {
  const { africa } = props.africa;

  const country = Object.entries(africa).map((
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
        className="statsCaller btn btn-success float-right"
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
  africa: state.africa,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Africa);
