import React from 'react';
import Header from './Header';
import '../styles/App.scss';
import ContinentList from '../containers/ContinentList';

function App() {
  return (
    <div className="App">
      <div>Covid 19 stats</div>
      <Header />
      <ContinentList />
    </div>
  );
}

export default App;
