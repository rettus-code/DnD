import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./components/pages/Home";
import Sharn from "./components/pages/Sharn";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/sharn" component={Sharn} />
      {/* <Route path="/contact" component={Contact} />
      <Footer /> */}
    </div>
  </Router>
  );
}

export default App;
