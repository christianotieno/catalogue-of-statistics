import { createStore } from 'redux';
import continentReducer from '../reducers/continentReducer';

const store = createStore(continentReducer);

export default store;
