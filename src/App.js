import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Welcome from './components/Welcome';
import Contact from './components/Contact';


function App() {

  return (
    <div className="app">


      <Router >
        <Welcome />
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Router>
      {/* <Home />
      <About /> */}
    </div>
  );
}

export default App;
