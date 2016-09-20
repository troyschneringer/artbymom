import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

import FeaturedProject from './FeaturedProject.js'

export default React.createClass({
  render() {
    return (
      <div className="home">
        <Jumbotron>
          <h1>Real art. Real moms. Real fun.</h1>
        </Jumbotron>
        <div className="container">
          <FeaturedProject projectId="1" align="right" />
          <hr className="featurette-divier"/>
          <FeaturedProject projectId="2" align="left" />
          <hr className="featurette-divier"/>
          <FeaturedProject projectId="3" align="right" />
        </div>
      </div>
    );
  }
})