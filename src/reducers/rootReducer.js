import { combineReducers } from 'redux';
import continentReducer from './continentReducer';
import africanReducer from './africanReducer';

const rootReducer = combineReducers({
  continents: continentReducer,
  africa: africanReducer,
});

export default rootReducer;
