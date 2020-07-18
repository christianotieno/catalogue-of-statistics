import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import store from '../react-store/store';
import ContinentList from '../containers/ContinentList';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <ContinentList />
      </div>
    </Provider>

  );
}

export default App;
