import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ModeWrapper from './ModeWrapper.js';
import Markup from './Drawing/Markup.js';
import CommentsWrapper from './Commenting/CommentsWrapper.js';
import Editor from './Editor/Editor.js'

function GlobalRouter() {
  return (
    <Router>
       <Link to="/">Home</Link>
       <Link to="/markup/">Markup</Link>
       <Link to="/commenting/">Comment</Link>
      <Route path="/" exact component={Editor} />
      <Route path="/markup/" component={Markup} />
      <Route path="/commenting/" component={CommentsWrapper} />
    </Router>
  )
}

export default GlobalRouter
