import React, { Component } from 'react';

import{BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Nav from './components/navComponent/nav';
import Footer from './components/footerComponent/footer';
import Lorem from './components/mainPage/loremIpsum';
import Where from './components/mainPage/where';
import Why from './components/mainPage/why';

import './default.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header />

        <Route exact path='/' component={Lorem}/>
        <Route exact path='/Where' component={Where}/>
        <Route exact path='/Why' component={Why}/>

        <Nav />

      <Footer />
      </div>

      </Router>
    );
  }
}

export default App;
