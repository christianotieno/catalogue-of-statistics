import { GET_CONTINENT_COUNTRIES } from '../helpers/actions/actions';
import oceania from '../helpers/containers/continents/oceania';

const initialState = {
  oceania,
};

const oceanianReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT_COUNTRIES:
      return {
        oceania: state.oceania,
      };
    default: return state;
  }
};

export default oceanianReducer;
