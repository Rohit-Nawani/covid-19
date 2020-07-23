import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Graph from "./pages/Graph";

import Map from "./pages/Map";
import Nav from "./components/Nav";
import Footer from "./Footer";
import Symptom from "./pages/Symptom";

import Prevention from "./pages/Prevention";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/symptom" component={Symptom} />
          <Route path="/graph" component={Graph} />
          <Route path="/about" component={About} />
          <Route path="/prevention" component={Prevention} />
          <Route path="/map" component={Map} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
