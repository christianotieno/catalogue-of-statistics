import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import store from '../react-store/store';
import ContinentList from '../containers/ContinentList';
import TestApi from './TestApi';
import Footer from './Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <ContinentList />
        {/* <TestApi /> */}
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
