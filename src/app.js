// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactGA from 'react-ga';
// import { IndexRoute, Router, Route, hashHistory } from 'react-router';

// import App from './components/App.js';
// import About from './components/Pages/About.js';
// import Home from './components/Pages/Home.js';
// import Projects from './components/Pages/Projects.js';
// import Project from './components/Pages/Project.js';

// import AuthService from './utils/AuthService';

// auth0
const auth = new AuthService(process.env.AUTH0_CLIENT_ID, 'artbymom.auth0.com');
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    auth.login();
  }
}

// google analytics
// ReactGA.initialize('UA-84662284-1');
function logPageView() {
  // ReactGA.set({ page: window.location.pathname });
  // ReactGA.pageview(window.location.pathname);
}

ReactDOM.render((
  <Router history={hashHistory} onUpdate={logPageView}>
    <Route path="/" component={App} auth={auth}>
      <IndexRoute to="/home" />
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="login" component={Login} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:projectId" component={Project}/>
    </Route>
  </Router>
), document.getElementById('react-container'))