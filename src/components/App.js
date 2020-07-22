import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import store from '../react-store/store';
import Asia from '../containers/continents/Asia';
import Africa from '../containers/continents/Africa';
import Europe from '../containers/continents/Europe';
import Oceania from '../containers/continents/Oceania';
import NorthAmerica from '../containers/continents/NorthAmerica';
import SouthAmerica from '../containers/continents/SouthAmerica';
import Header from './Header';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/asia" component={Asia} />
            <Route path="/africa" component={Africa} />
            <Route path="/oceania" component={Oceania} />
            <Route path="/europe" component={Europe} />
            <Route path="/north-america" component={NorthAmerica} />
            <Route path="/south-america" component={SouthAmerica} />
          </Switch>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
