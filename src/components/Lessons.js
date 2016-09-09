import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      lessons: []
    };
  },

  componentDidMount() {
    this.lessonsRequest = $.get("/data/lessons/index.json", function(data){
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
      <div className="container">
        <div className="page-header">
            <h1>Lessons</h1>
          </div>
        <LessonSummaryList lessons={this.state.lessons}/>
      </div>
    )
  }
})

var LessonSummary = React.createClass({
  render: function() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="hovereffect">
          <img className="img-responsive" src={this.props.lesson.thumbnailUrl} />
          <div className="overlay">
          <h2>{this.props.lesson.name}</h2>
          <Link to={"/lessons/" + this.props.lesson.id} className="info">see more</Link>
        </div>
      </div>
    </div>
    )
  }
});

var LessonSummaryList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.lessons.map(function(lesson){
          return <LessonSummary key={lesson.id} lesson={lesson} /> })}
      </div>
    );
  } 
});