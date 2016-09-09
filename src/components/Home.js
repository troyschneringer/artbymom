import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

import FeaturedLesson from './FeaturedLesson.js'

export default React.createClass({
  render() {
    return (
      <div className="home">
        <Jumbotron>
          <h1>Real art. Real moms. Real fun.</h1>
        </Jumbotron>
        <div className="container">
          <FeaturedLesson lessonId="lesson1" align="right" />
          <hr className="featurette-divier"/>
          <FeaturedLesson lessonId="lesson2" align="left" />
          <hr className="featurette-divier"/>
          <FeaturedLesson lessonId="lesson3" align="right" />
        </div>
      </div>
    );
  }
})