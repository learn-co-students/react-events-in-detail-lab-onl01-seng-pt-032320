import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  mouseLogger = (event) => {
    let myCoords = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(myCoords);
  }
    
  render() { return (<button onClick={this.mouseLogger}>Button</button>) }
}