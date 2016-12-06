import { Grid, Row, Col } from 'react-bootstrap'
import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

import Steps from '../Projects/Steps.js'

export default React.createClass({
  getInitialState() {
    return {
      project: {
        name: '',
        steps: []
      }
    }
  },

  componentDidMount() {
    var url = 'data/projects/project' + this.props.params.projectId + '.json';
    this.projectRequest = $.get(url, function (data) {
      this.setState(state => {
        state.project = data;
        return state;
      });
    }.bind(this));
  },

  componentWillUnmount() {
    this.projectRequest.abort();
  },

  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>{this.state.project.name}</h1>
          </Grid>
        </Jumbotron>
      <Grid>
        <Row>
          <Col lg={12}>
            <Steps steps={this.state.project.steps} />
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
})