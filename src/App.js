import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./components/pages/Home";
import Sharn from "./components/pages/Sharn";
import Setting from "./components/pages/Setting";
import Apok from "./components/pages/charachters/Apok.js";
import Silvertone from './components/pages/charachters/Silvertone.js';
import Keys from './components/pages/charachters/Keys.js';
import Needles from './components/pages/charachters/Needles.js';
import Megan from './components/pages/charachters/Megan.js';
import Duncan from './components/pages/charachters/Duncan.js';
import Naga from './components/pages/charachters/Naga.js';
import Josh from './components/pages/charachters/Josh.js';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/sharn" component={Sharn} />
      <Route path="/setting" component={Setting} />
      <Route path="/Apok" component={Apok} />
      <Route path="/Silvertone" component={Silvertone} />
      <Route path="/Keys" component={Keys} />
      <Route path="/Needles" component={Needles} />
      <Route path="/Megan" component={Megan} />
      <Route path="/Duncan" component={Duncan} />
      <Route path="/Naga" component={Naga} />
      <Route path="/Josh" component={Josh} />
      {/* <Footer /> */}
    </div>
  </Router>
  );
}

export default App;
