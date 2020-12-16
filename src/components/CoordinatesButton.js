import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    getCoordinates = (event) => {
        const coors = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coors)
    }

    render () {
        return (
            <button onClick={this.getCoordinates}>Coordinates</button>
        )
    }
}