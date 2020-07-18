import React from 'react';
import { Provider } from 'react-redux';
import store from '../react-store/store';
import Header from './Header';
import ContinentList from '../containers/ContinentList';
import Africa from './Africa';
import Asia from './Asia';
import NorthAmerica from './NorthAmerica';
import Europe from './Europe';
import SouthAmerica from './SouthAmerica';
import Oceania from './Oceania';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ContinentList />
        {/* <Africa /> */}
        {/* <Asia /> */}
        {/* <Europe /> */}
        {/* <NorthAmerica /> */}
        {/* <SouthAmerica /> */}
        {/* <Oceania /> */}
      </div>
    </Provider>

  );
}

export default App;
