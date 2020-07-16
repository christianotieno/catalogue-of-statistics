import React from 'react';
import Header from './Header';
import '../styles/App.scss';
import CountryList from '../containers/CountryList';

function App() {
  return (
    <div className="App">
      <h2>App Component</h2>
      <Header />
      <CountryList />
    </div>
  );
}

export default App;
