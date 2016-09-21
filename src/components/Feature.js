import { Link } from 'react-router'
import React from 'react'

export default React.createClass({

    render() {
        return (
            <div className={"feature " + this.props.color}>
                <div className="container">
                    <div className="row">
                        <div className={"col-md-7" + (this.props.align == 'left' ? " col-md-push-5" : "") }>
                            <h2>{this.props.title}</h2>
                            <p>{this.props.children}</p>
                            
                        </div>
                        <div className={"col-md-5" + (this.props.align == 'left' ? " col-md-pull-7" : "") }>
                            <img className="img-circle img-responsive center-block" alt="500x500" src={this.props.imageUrl} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});