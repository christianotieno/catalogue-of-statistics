import { GET_COUNTRY } from '../helpers/actions/actions';
import world from '../helpers/containers/continents/world';

const initialState = {
  world,
};

const worldReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        continents: state.world,
      };
    default: return state;
  }
};

export default worldReducer;
