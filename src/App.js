import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/navbar'
import Footer from './components/footer'

import Landing from './pages/landing'
import Contact from './pages/contact'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App