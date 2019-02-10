import React from "react";
import { Switch ,Route } from "react-router-dom";
import Home from "./Routes/Home";
import Work from "./Routes/Work";
import About from "./Routes/About";
import Contact from "./Routes/Contact";

import Header from "./Components/Header/";
import Footer from "./Components/Footer/";

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <div>
    <CssBaseline />
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/work/" component={Work} />
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
    </Switch>
    <Footer />
  </div>
);

export default App;