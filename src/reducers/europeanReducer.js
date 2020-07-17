import { GET_CONTINENT_COUNTRIES } from '../helpers/actions/actions';
import europe from '../helpers/containers/continents/europe';

const initialState = {
  europe,
};

const europeanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT_COUNTRIES:
      return {
        europe: state.europe,
      };
    default: return state;
  }
};

export default europeanReducer;
