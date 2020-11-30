// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component{
    constructor(props){
        super()
    }

    onClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates);
    }


    render() {
        return (
            <button onClick={this.onClick}>Coordinates</button>
        )
    }
}
