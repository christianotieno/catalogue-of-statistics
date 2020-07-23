import { GET_CONTINENT_COUNTRIES } from '../helpers/actions/actions';
import africa from '../helpers/containers/continents/africa';

const initialState = {
  africa,
};

const africanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT_COUNTRIES:
      return {
        africa: state.africa,
      };
    default: return state;
  }
};

export default africanReducer;
