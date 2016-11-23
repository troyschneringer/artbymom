'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactRouter = require('react-router');

var _App = require('./components/App.js');

var _App2 = _interopRequireDefault(_App);

var _About = require('./components/Pages/About.js');

var _About2 = _interopRequireDefault(_About);

var _Home = require('./components/Pages/Home.js');

var _Home2 = _interopRequireDefault(_Home);

var _Projects = require('./components/Pages/Projects.js');

var _Projects2 = _interopRequireDefault(_Projects);

var _Project = require('./components/Pages/Project.js');

var _Project2 = _interopRequireDefault(_Project);

var _AuthService = require('./utils/AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// auth0
var auth = new _AuthService2.default(process.env.AUTH0_CLIENT_ID, 'artbymom.auth0.com');
var requireAuth = function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    auth.login();
  }
};

// google analytics
_reactGa2.default.initialize('UA-84662284-1');
function logPageView() {
  _reactGa2.default.set({ page: window.location.pathname });
  _reactGa2.default.pageview(window.location.pathname);
}

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory, onUpdate: logPageView },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default, auth: auth },
    _react2.default.createElement(_reactRouter.IndexRoute, { to: '/home' }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),
    _react2.default.createElement(_reactRouter.Route, { path: '/projects', component: _Projects2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/projects/:projectId', component: _Project2.default })
  )
), document.getElementById('react-container'));
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('./Nav.js');

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = require('./Footer.js');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'App',
  render: function render() {

    var children = null;
    if (this.props.children) {
      children = _react2.default.cloneElement(this.props.children, {
        auth: this.props.route.auth
      });
    }

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Nav2.default, null),
      _react2.default.createElement(
        'main',
        null,
        children
      ),
      _react2.default.createElement(_Footer2.default, null)
    );
  }
});
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactBootstrap = require('react-bootstrap');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Feature',
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: "feature " + this.props.color },
            _react2.default.createElement(
                _reactBootstrap.Grid,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { md: 7, mdPush: this.props.align == 'left' ? 4 : 1, sm: 6, smPush: this.props.align == 'left' ? 6 : 0 },
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.props.title
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.children
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        _extends({ md: 3 }, this.props.align == 'left' ? { mdPull: 6 } : { mdPush: 1 }, { sm: 6, smPull: this.props.align == 'left' ? 6 : 0 }),
                        _react2.default.createElement('img', { className: 'img-circle img-responsive center-block', alt: this.props.title, src: this.props.imageUrl })
                    )
                )
            )
        );
    }
});
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "Footer",
    render: function render() {
        return _react2.default.createElement(
            "footer",
            { className: "container" },
            _react2.default.createElement(
                "em",
                { className: "pull-right text-lowercase text-muted" },
                "All images \xA9 artbymom 2016"
            )
        );
    }
});
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _AuthService = require('utils/AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

var _stylesModule = require('./styles.module.css');

var _stylesModule2 = _interopRequireDefault(_stylesModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = exports.Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var auth = this.props.auth;

            return _react2.default.createElement(
                'div',
                { className: _stylesModule2.default.root },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Login'
                ),
                _react2.default.createElement(
                    _reactBootstrap.ButtonToolbar,
                    { className: _stylesModule2.default.toolbar },
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary', onClick: auth.login.bind(this) },
                        'Login'
                    )
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

Login.propTypes = {
    location: _react.PropTypes.object,
    auth: _react.PropTypes.instanceOf(_AuthService2.default)
};

exports.default = Login;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Nav',
    render: function render() {
        return _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-default navbar-fixed-top' },
            _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-header' },
                    _react2.default.createElement(
                        _reactRouter.IndexLink,
                        { to: '/', className: 'navbar-brand' },
                        'Home'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'navbar', className: 'collapse navbar-collapse' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'nav navbar-nav' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/projects', activeClassName: 'active' },
                                'Projects'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/about', activeClassName: 'active' },
                                'About'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'right' },
                            'Login'
                        )
                    )
                )
            )
        );
    }
});
'use strict';

var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var databaseUrl = process.env.DATABASE_URL;
var pgp = require('pg-promise')(options);
var db = pgp(databaseUrl);

// Projects
function deleteProject(id) {
    return db.none('delete from projects where id = $1', [id]);
}

function getAllProjects() {
    return db.any('select * from projects');
}

function insertProject(project) {
    return db.one('insert into projects (name, description, thumbnail) values ($1, $2, $3) returning id', [project.name, project.description, project.thumbnail]).then(function (data) {
        project.id = data.id;
        return project;
    });
}

module.exports = {
    deleteProject: deleteProject,
    getAllProjects: getAllProjects,
    insertProject: insertProject
};
'use strict';

var express = require('express');
var router = express.Router();
var db = require('./database.js');

router.delete('/:id', function (req, res) {
    db.deleteProject(req.params.id).then(function (data) {
        res.statusCode = 204;
        res.end();
    }).catch(function (error) {
        res.statusCode = 500;
        res.send('Error 500: ' + error);
    });
});

router.get('/', function (req, res) {
    db.getAllProjects().then(function (data) {
        res.setHeader('Content-Type', 'application/json');
        res.json({ projects: data });
    }).catch(function (error) {
        res.statusCode = 500;
        res.send('Error 500: ' + error);
    });
});

router.post('/', function (req, res) {
    if (!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('description')) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }

    var project = {
        name: req.body.name,
        description: req.body.description,
        thumbnail: req.body.thumbnail
    };

    db.insertProject(project).then(function (data) {
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    }).catch(function (error) {
        res.statusCode = 500;
        res.send('Error 500: ' + error);
    });;
});

module.exports = router;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth0Lock = require('auth0-lock');

var _auth0Lock2 = _interopRequireDefault(_auth0Lock);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthService = function () {
  function AuthService(clientId, domain) {
    _classCallCheck(this, AuthService);

    // Configure Auth0
    this.lock = new _auth0Lock2.default(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/login',
        responseType: 'token'
      }
    });
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  _createClass(AuthService, [{
    key: '_doAuthentication',
    value: function _doAuthentication(authResult) {
      // Saves the user token
      this.setToken(authResult.idToken);
      // navigate to the home route
      _reactRouter.browserHistory.replace('/home');
    }
  }, {
    key: 'login',
    value: function login() {
      // Call the show method to display the widget.
      this.lock.show();
    }
  }, {
    key: 'loggedIn',
    value: function loggedIn() {
      // Checks if there is a saved token and it's still valid
      return !!this.getToken();
    }
  }, {
    key: 'setToken',
    value: function setToken(idToken) {
      // Saves user token to local storage
      localStorage.setItem('id_token', idToken);
    }
  }, {
    key: 'getToken',
    value: function getToken() {
      // Retrieves the user token from local storage
      return localStorage.getItem('id_token');
    }
  }, {
    key: 'logout',
    value: function logout() {
      // Clear user token and profile data from local storage
      localStorage.removeItem('id_token');
    }
  }]);

  return AuthService;
}();

exports.default = AuthService;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactBootstrap = require('react-bootstrap');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'About',
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'About'
        )
      )
    );
  }
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Jumbotron = require('react-bootstrap/lib/Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Feature = require('../Feature.js');

var _Feature2 = _interopRequireDefault(_Feature);

var _ProjectList = require('../Projects/ProjectList.js');

var _ProjectList2 = _interopRequireDefault(_ProjectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'Home',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'home' },
      _react2.default.createElement(
        _Jumbotron2.default,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Art By Mom'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Real Art | ',
          _react2.default.createElement(
            'em',
            null,
            'Real Fun'
          )
        )
      ),
      _react2.default.createElement(
        _Feature2.default,
        { title: 'Everyone is an Artist', imageUrl: 'images/feature-pencils.jpg', color: 'yellow' },
        'Thereafter he walked very carefully, with his eyes on the road, and when he saw a tiny ant toiling by he would step over it, so as not to harm it.  The Tin Woodman knew very well he had no heart, and therefore he took great care never to be cruel or unkind to anything. "You people with hearts," he said, "have something to guide you, and need never do wrong; but I have no heart, and so I must be very careful.  When Oz gives me a heart of course I needn\'t mind so much.\\" They were obliged to camp out that night under a large tree in the forest, for there were no houses near.'
      ),
      _react2.default.createElement(
        _Feature2.default,
        { title: 'Everyday is Art Class', imageUrl: 'images/feature-tools.jpg', align: 'left', color: 'blue' },
        'Thereafter he walked very carefully, with his eyes on the road, and when he saw a tiny ant toiling by he would step over it, so as not to harm it.  The Tin Woodman knew very well he had no heart, and therefore he took great care never to be cruel or unkind to anything. "You people with hearts," he said, "have something to guide you, and need never do wrong; but I have no heart, and so I must be very careful.  When Oz gives me a heart of course I needn\'t mind so much.\\" They were obliged to camp out that night under a large tree in the forest, for there were no houses near.'
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(_ProjectList2.default, null)
    );
  }
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactBootstrap = require('react-bootstrap');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Jumbotron = require('react-bootstrap/lib/Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Steps = require('../Projects/Steps.js');

var _Steps2 = _interopRequireDefault(_Steps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'Project',
  getInitialState: function getInitialState() {
    return {
      project: {
        name: '',
        steps: []
      }
    };
  },
  componentDidMount: function componentDidMount() {
    var url = 'data/projects/project' + this.props.params.projectId + '.json';
    this.projectRequest = $.get(url, function (data) {
      this.setState(function (state) {
        state.project = data;
        return state;
      });
    }.bind(this));
  },
  componentWillUnmount: function componentWillUnmount() {
    this.projectRequest.abort();
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Jumbotron2.default,
        null,
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            'h1',
            null,
            this.state.project.name
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { lg: 12 },
            _react2.default.createElement(_Steps2.default, { steps: this.state.project.steps })
          )
        )
      )
    );
  }
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactBootstrap = require('react-bootstrap');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectList = require('../Projects/ProjectList.js');

var _ProjectList2 = _interopRequireDefault(_ProjectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'Projects',
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Projects'
        )
      ),
      _react2.default.createElement(_ProjectList2.default, null)
    );
  }
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactBootstrap = require('react-bootstrap');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'ProjectList',
  getInitialState: function getInitialState() {
    return {
      projects: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.projectsRequest = $.get("data/projects/index.json", function (data) {
      this.setState({
        projects: data.projects
      });
    }.bind(this));
  },
  componentWillUnmount: function componentWillUnmount() {
    this.projectsRequest.abort();
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactBootstrap.Grid,
        { className: 'project-list' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          this.state.projects.map(function (project) {
            return _react2.default.createElement(ProjectThumbnail, { key: project.id, project: project });
          })
        )
      )
    );
  }
});


var ProjectThumbnail = _react2.default.createClass({
  displayName: 'ProjectThumbnail',

  render: function render() {
    return _react2.default.createElement(
      _reactBootstrap.Col,
      { md: 4, xs: 6, className: 'clearfix' },
      _react2.default.createElement(
        _reactBootstrap.Thumbnail,
        { src: this.props.project.images.thumbnail, alt: this.props.project.name },
        _react2.default.createElement(
          'h3',
          null,
          this.props.project.name
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactBootstrap.Label,
            { bsStyle: 'primary' },
            'ages ',
            this.props.project.age
          ),
          this.props.project.categories.map(this._renderCategory)
        ),
        _react2.default.createElement(
          'p',
          { className: 'description' },
          this.props.project.description
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: "/projects/" + this.props.project.id, className: 'info' },
            'see full project'
          )
        )
      )
    );
  },

  _renderCategory: function _renderCategory(category, index) {
    return _react2.default.createElement(
      'span',
      { key: index },
      '\xA0',
      _react2.default.createElement(
        _reactBootstrap.Label,
        null,
        category
      )
    );
  }
});
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactBootstrap = require('react-bootstrap');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Step = _react2.default.createClass({
    displayName: 'Step',

    render: function render() {
        return _react2.default.createElement(
            _reactBootstrap.Row,
            { className: 'step' },
            _react2.default.createElement(
                _reactBootstrap.Col,
                { md: 9, sm: 7 },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'text-muted' },
                            'Step ',
                            this.props.step.id,
                            ':'
                        ),
                        ' ',
                        this.props.step.name
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        this.props.step.instructions
                    )
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Col,
                { md: 3, sm: 5 },
                _react2.default.createElement('img', { className: 'img-thumbnail img-responsive', src: this.props.step.imageUrl, alt: this.props.step.name })
            )
        );
    }
});

exports.default = _react2.default.createClass({
    displayName: 'Steps',
    render: function render() {
        return _react2.default.createElement(
            _reactBootstrap.Grid,
            { className: 'steps' },
            this.props.steps.map(function (step, index) {
                return _react2.default.createElement(Step, { key: step.id, step: step, invert: index % 2 == 1 });
            })
        );
    }
});