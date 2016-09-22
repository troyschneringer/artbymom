import { Grid, Row, Col } from 'react-bootstrap'
import React from 'react'

var Step = React.createClass({
    render: function () {
        return (
            <Row className="step">
                <Col md={9} sm={7}>
                    <div>
                        <h4><span className="text-muted">Step {this.props.step.id}:</span> {this.props.step.name}</h4>
                    </div>
                    <div>
                        <p>{this.props.step.instructions}</p>
                    </div>
                </Col>
                <Col md={3} sm={5}>
                    <img className="img-thumbnail img-responsive" src={this.props.step.imageUrl} alt={this.props.step.name} />
                </Col>
            </Row>
        )
    }
});

export default React.createClass({
    render() {
        return (
            <Grid className="steps">
                {this.props.steps.map(function (step, index) {
                    return <Step key={step.id} step={step} invert={index % 2 == 1} />
                }) }
            </Grid>
        );
    }
});