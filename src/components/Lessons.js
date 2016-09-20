import { Grid, Row, Col } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      lessons: []
    };
  },

  componentDidMount() {
    this.lessonsRequest = $.get("data/lessons/index.json", function(data){
      this.setState({
        lessons: data.lessons
      });
    }.bind(this));
  },

  componentWillUnmount() {
    this.lessonsRequest.abort();
  },

  render() {
    return (
      <Grid>
        <div className="page-header">
          <h1>Lessons</h1>
        </div>
        <LessonSummaryList lessons={this.state.lessons}/>
      </Grid>
    )
  }
})

var LessonSummary = React.createClass({
  render: function() {
    return (
      <Col md={3} xs={6}>
        <div className="hovereffect">
          <img className="img-responsive" src={this.props.lesson.imageUrl} />
          <div className="overlay">
          <h2>{this.props.lesson.name}</h2>
          <Link to={"/lessons/" + this.props.lesson.id} className="info">see more</Link>
        </div>
      </div>
    </Col>
    )
  }
});

var LessonSummaryList = React.createClass({
  render: function() {
    return (
      <Row>
        {this.props.lessons.map(function(lesson){
          return <LessonSummary key={lesson.id} lesson={lesson} /> })}
      </Row>
    );
  } 
});