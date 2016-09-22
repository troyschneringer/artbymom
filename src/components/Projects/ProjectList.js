import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
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
      <div>
        <Grid>
          <Row>
            {this.state.projects.map(function(project){
              return <ProjectThumbnail key={project.id} project={project} /> })}
          </Row>
        </Grid>
      </div>
    )
  }
})

var ProjectThumbnail = React.createClass({
  render: function() {
    return (
        <Col md={4} xs={6} className="clearfix">
          <Thumbnail src={this.props.project.images.thumbnail} alt={this.props.project.name}>
            <h3>{this.props.project.name}</h3>
            <p>...</p>
            <p><Link to={"/projects/" + this.props.project.id} className="info">see full project</Link></p>
          </Thumbnail>
        </Col>
    )
  }
});