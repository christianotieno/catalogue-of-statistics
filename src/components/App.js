import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import store from '../react-store/store';
import ContinentList from '../containers/ContinentList';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <ContinentList />
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
