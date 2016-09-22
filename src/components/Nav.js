import React from 'react'
import { IndexLink, Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <IndexLink to="/" className="navbar-brand">Home</IndexLink>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/projects" activeClassName="active">Projects</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
});