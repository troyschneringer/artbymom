import React from 'react'
import { IndexLink, Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <IndexLink to="/" className="navbar-brand">Home</IndexLink>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/lessons" activeClassName="active">Lessons</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
})