// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClickEvent = (event) => {
        const coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button onClick={this.handleClickEvent}>OK</button>
        )
    }
}
