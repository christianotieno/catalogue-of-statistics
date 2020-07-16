import { GET_CONTINENT } from '../helpers/actions/actions';
import continents from '../helpers/containers/continents';

const initialState = {
  continents,
};

const continentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT:
      return {
        continents: state.continents,
      };
    default: return state;
  }
};

export default continentReducer;
