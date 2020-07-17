import { GET_CONTINENT_COUNTRIES } from '../helpers/actions/actions';
import southAmerica from '../helpers/containers/continents/southAmerica';

const initialState = {
  southAmerica,
};

const northAmericanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT_COUNTRIES:
      return {
        southAmerica: state.southAmerica,
      };
    default: return state;
  }
};

export default northAmericanReducer;
