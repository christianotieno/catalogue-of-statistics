import { GET_CONTINENT_COUNTRIES } from '../helpers/actions/actions';
import asia from '../helpers/containers/continents/asia';

const initialState = {
  asia,
};

const asianReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT_COUNTRIES:
      return {
        asia: state.asia,
      };
    default: return state;
  }
};

export default asianReducer;
