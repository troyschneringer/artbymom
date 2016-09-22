import { Grid, Row, Col } from 'react-bootstrap'
import React from 'react'

export default React.createClass({

    render() {
        return (
            <div className={"feature " + this.props.color}>
                <Grid>
                    <Row>
                        <Col md={7} mdPush={(this.props.align == 'left' ? 4 : 1)} sm={6} smPush={(this.props.align == 'left' ? 6 : 0)}>
                            <h2>{this.props.title}</h2>
                            <p>{this.props.children}</p>
                        </Col>
                        <Col md={3} {...(this.props.align == 'left') ? { mdPull: 6 } : { mdPush: 1 }} sm={6} smPull={(this.props.align == 'left' ? 6 : 0)}>
                            <img className="img-circle img-responsive center-block" alt={this.props.title} src={this.props.imageUrl} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});