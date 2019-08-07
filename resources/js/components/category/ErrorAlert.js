import React, { Component } from 'react';

export default class ErrorAlert extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">oh No!</h4>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

