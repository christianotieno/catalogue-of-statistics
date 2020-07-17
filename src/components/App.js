import React from 'react';
import { Provider } from 'react-redux';
import store from '../react-store/store';
import Header from './Header';
import '../styles/App.scss';
import ContinentList from '../containers/ContinentList';
import Continent from '../containers/africa';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ContinentList />
        <Continent />
      </div>
    </Provider>

  );
}

export default App;
