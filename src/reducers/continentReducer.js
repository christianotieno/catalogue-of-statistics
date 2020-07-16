import { GET_CONTINENT } from '../helpers/actions/actions';

const initialState = {
  continents: ['Africa', 'Asia', 'Antarctica', 'North America', 'South America', 'Europe', 'Oceania'],
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
