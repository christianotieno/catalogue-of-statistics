import React from 'react';
import { Provider } from 'react-redux';
import store from '../react-store/store';
import Header from './Header';
import '../styles/App.scss';
import ContinentList from '../containers/ContinentList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>Covid 19 stats</div>
        <Header />
        <ContinentList />
      </div>
    </Provider>

  );
}

export default App;
