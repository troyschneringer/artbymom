import { Grid, Row, Col } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      projects: []
    };
  },

  componentDidMount() {
    this.projectsRequest = $.get("data/projects/index.json", function(data){
      this.setState({
        projects: data.projects
      });
    }.bind(this));
  },

  componentWillUnmount() {
    this.projectsRequest.abort();
  },

  render() {
    return (
      <Grid>
        <div className="page-header">
          <h1>Projects</h1>
        </div>
        <ProjectSummaryList projects={this.state.projects}/>
      </Grid>
    )
  }
})

var ProjectSummary = React.createClass({
  render: function() {
    return (
      <Col md={3} xs={6}>
        <div className="hovereffect">
          <img className="img-responsive" src={this.props.project.imageUrl} />
          <div className="overlay">
          <h2>{this.props.project.name}</h2>
          <Link to={"/projects/" + this.props.project.id} className="info">see more</Link>
        </div>
      </div>
    </Col>
    )
  }
});

var ProjectSummaryList = React.createClass({
  render: function() {
    return (
      <Row>
        {this.props.projects.map(function(project){
          return <ProjectSummary key={project.id} project={project} /> })}
      </Row>
    );
  } 
});