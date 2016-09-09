import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

import App from './components/App.js'
import Home from './components/Home.js'
import Lessons from './components/Lessons.js'
import Lesson from './components/Lesson.js'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/lessons" component={Lessons} />
      <Route path="/lessons/:lessonId" component={Lesson}/>
    </Route>
  </Router>
), document.getElementById('react-container'))