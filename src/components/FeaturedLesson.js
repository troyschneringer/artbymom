import { Link } from 'react-router'
import React from 'react'

export default React.createClass({

    getInitialState() {
        return {
            lesson: {
                name: '',
                description: '',
                imageUrl: ''
            }
        }
    },

    componentDidMount() {
        var url = '/artbymom/data/lessons/' + this.props.lessonId + '.json';
        this.lessonRequest = $.get(url, function (data) {
            this.setState(state => {
                state.lesson = data;
                return state;
            });
        }.bind(this));
    },

    componentWillUnmount() {
        this.lessonRequest.abort();
    },

    render() {
        return (
            <div className="row featurette">
                <div className={"col-md-7" + (this.props.align == 'left' ? " col-md-push-5" : "") }>
                    <h2 className="featurette-heading">{this.state.lesson.name}</h2>
                    <p>{this.state.lesson.description}</p>
                    <Link to={"/lessons/" + this.props.lessonId} className="info">See the full lesson...</Link>
                </div>
                <div className={"col-md-5" + (this.props.align == 'left' ? " col-md-pull-7" : "") }>
                    <img className="featurette-image img-responsive center-block" alt="500x500" src={this.state.lesson.imageUrl} />
                </div>
            </div>
        )
    }
});