// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    mouse = (event) => {
        const eventArray = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(eventArray);
    }

    render() {
        return <button onClick={this.mouse}></button>
    }
}

// In the components/CoordinatesButton.js file, create a CoordinatesButton React component.

// This component takes in one prop: this.props.onReceiveCoordinates. This prop is a function passed down from index.js.
// This function is currently just logging whatever is passed into it.

// Within CoordinatesButton, render a button. On click of the button,
// create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.

// Pass this event data in as the argument for the onReceiveCoordinates prop.

// If successful, the current x,y position of your mouse should be logged.

// <CoordinatesButton />
// ✓ should have one button
// 1) should call the callback prop when the button is clicked
// 2) should pass the right coordinates to the callback prop

// <DelayedButton />
// ✓ should have one button
// 3) should call the callback prop after the delay
// 4) should pass the event to the callback prop

