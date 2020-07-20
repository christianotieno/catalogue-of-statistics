import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import store from '../react-store/store';
import ContinentList from '../containers/ContinentList';
import Marquee from './Marquee';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Marquee />
        <ContinentList />
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
