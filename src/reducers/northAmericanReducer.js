import { GET_CONTINENT_COUNTRIES } from '../helpers/actions/actions';
import northAmerica from '../helpers/containers/continents/northAmerica';

const initialState = {
  northAmerica,
};

const northAmericanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT_COUNTRIES:
      return {
        northAmerica: state.northAmerica,
      };
    default: return state;
  }
};

export default northAmericanReducer;
