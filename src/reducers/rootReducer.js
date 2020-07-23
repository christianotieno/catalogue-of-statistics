import { combineReducers } from 'redux';
import continentReducer from './continentReducer';
import africanReducer from './africanReducer';
import europeanReducer from './europeanReducer';
import asianReducer from './asiaReducer';
import northAmericanReducer from './northAmericanReducer';
import southAmericanReducer from './southAmericanReducer';
import oceanianReducer from './oceanianReducer';

const rootReducer = combineReducers({
  continents: continentReducer,
  africa: africanReducer,
  europe: europeanReducer,
  asia: asianReducer,
  northAmerica: northAmericanReducer,
  southAmerica: southAmericanReducer,
  oceania: oceanianReducer,
});

export default rootReducer;
