import { Link } from 'react-router'
import React from 'react'

export default React.createClass({

    getInitialState() {
        return {
            project: {
                name: '',
                description: '',
                imageUrl: ''
            }
        }
    },

    componentDidMount() {
        var url = 'data/projects/project' + this.props.projectId + '.json';
        this.projectRequest = $.get(url, function (data) {
            this.setState(state => {
                state.project = data;
                return state;
            });
        }.bind(this));
    },

    componentWillUnmount() {
        this.projectRequest.abort();
    },

    render() {
        return (
            <div className="row featurette">
                <div className={"col-md-7" + (this.props.align == 'left' ? " col-md-push-5" : "") }>
                    <h2 className="featurette-heading">{this.state.project.name}</h2>
                    <p>{this.state.project.description}</p>
                    <Link to={"/projects/" + this.props.projectId} className="info">See the full project...</Link>
                </div>
                <div className={"col-md-5" + (this.props.align == 'left' ? " col-md-pull-7" : "") }>
                    <img className="featurette-image img-responsive center-block" alt="500x500" src={this.state.project.imageUrl} />
                </div>
            </div>
        )
    }
});