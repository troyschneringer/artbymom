import { Grid, Row, Col } from 'react-bootstrap'
import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

import Steps from './Steps.js'

export default React.createClass({
  getInitialState() {
    return {
      lesson: {
        name: '',
        steps: []
      }
    }
  },

  componentDidMount() {
    var url = 'data/lessons/lesson' + this.props.params.lessonId + '.json';
    this.lessonRequest = $.get(url, function (data) {
      this.setState(state => {
        state.lesson = data;
        return state;
      });
    }.bind(this));
  },

  componentWillUnmount() {
    this.lessonRequest.abort();
  },

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <Jumbotron>
              <h1>{this.state.lesson.name}</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Steps steps={this.state.lesson.steps} />
          </Col>
        </Row>
      </Grid>
    )
  }
})