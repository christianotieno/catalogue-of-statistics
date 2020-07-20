import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import store from '../react-store/store';
import ContinentList from '../containers/ContinentList';
import MarqueeText from './MarqueeText';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <MarqueeText />
        <ContinentList />
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
