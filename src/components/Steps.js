import { Grid, Row, Col } from 'react-bootstrap'
import React from 'react'

var Step = React.createClass({
    render: function () {
        return (
            <Row className="step">
                <Col md={9} mdPush={(this.props.invert ? 3 : 0)} sm={7} smPush={(this.props.invert ? 5 : 0)}>
                    <div>
                        <h4>{this.props.step.name}</h4>
                    </div>
                    <div>
                        <p>{this.props.step.instructions}</p>
                    </div>
                </Col>
                <Col md={3} mdPull={(this.props.invert ? 9 : 0)} sm={5} smPull={(this.props.invert ? 7 : 0)}>
                    <img className="img-circle img-responsive" src={this.props.step.imageUrl} alt={this.props.step.name} />
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