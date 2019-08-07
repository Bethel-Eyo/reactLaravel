import React, { Component } from 'react';

export default class SuccessAlert extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

