import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

import Feature from '../Feature.js'
import ProjectList from '../Projects/ProjectList.js'

export default React.createClass({
  render() {
    return (
      <div className="home">
        <Jumbotron>
          <h1>Art By Mom</h1>
          <h2>Real Art | <em>Real Fun</em></h2>
        </Jumbotron>
        <Feature title="Everyone is an Artist" imageUrl="http://placehold.it/250x250" color="yellow">
          Thereafter he walked very carefully, with his eyes on the road, and when he saw a tiny ant toiling by he would step over it, so as not to harm it.  The Tin Woodman knew very well he had no heart, and therefore he took great care never to be cruel or unkind to anything. "You people with hearts," he said, "have something to guide you, and need never do wrong; but I have no heart, and so I must be very careful.  When Oz gives me a heart of course I needn't mind so much.\" They were obliged to camp out that night under a large tree in the forest, for there were no houses near.
        </Feature>
        <Feature title="Everyday is Art Class" imageUrl="http://placehold.it/250x250" align="left" color="blue">
          Thereafter he walked very carefully, with his eyes on the road, and when he saw a tiny ant toiling by he would step over it, so as not to harm it.  The Tin Woodman knew very well he had no heart, and therefore he took great care never to be cruel or unkind to anything. "You people with hearts," he said, "have something to guide you, and need never do wrong; but I have no heart, and so I must be very careful.  When Oz gives me a heart of course I needn't mind so much.\" They were obliged to camp out that night under a large tree in the forest, for there were no houses near.
        </Feature>
        <hr />
        <ProjectList />
      </div>
    );
  }
})