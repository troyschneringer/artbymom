import { Grid } from 'react-bootstrap'
import React from 'react'

import ProjectList from '../Projects/ProjectList.js'

export default React.createClass({
  render() {
    return (
      <div>
        <Grid>
          <h1>Projects</h1>
        </Grid>
        <ProjectList />
      </div>
    );
  }
})