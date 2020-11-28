// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleOnClick = (event) => {
        //onReceiveCoordinate prop is a function passed down from index.js
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.handleOnClick}>
                Coordinate!
            </button>
        )
    }
}

export default CoordinatesButton;