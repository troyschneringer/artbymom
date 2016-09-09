import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 callout">
                <img className="img-circle" src={this.props.img} alt={this.props.heading} width="150" height="150" />
                <h2>{this.props.heading}</h2>
                <p>{this.props.description}</p>
                <p><a className="btn btn-default" href={this.props.href} role="button">View details »</a></p>
            </div>
        );
    }
});