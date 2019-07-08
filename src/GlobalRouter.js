import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ModeWrapper from './ModeWrapper.js';
import Markup from './Drawing/Markup.js';

function GlobalRouter() {
  return (
    <Router>
       <Link to="/">Home</Link>
        <Link to="/markup/">Markup</Link>
      <Route path="/" exact component={ModeWrapper} />
      <Route path="/markup/" component={Markup} />
    </Router>
  )
}

export default GlobalRouter
