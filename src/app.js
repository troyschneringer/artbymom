import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

import App from './components/App.js'

import About from './components/Pages/About.js'
import Home from './components/Pages/Home.js'
import Projects from './components/Pages/Projects.js'
import Project from './components/Pages/Project.js'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:projectId" component={Project}/>
    </Route>
  </Router>
), document.getElementById('react-container'))