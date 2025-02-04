import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";  // changed to HashRouter
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Router>  {/* Changed BrowserRouter to HashRouter */}
        <Switch>
          <Route exact path="Home/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
