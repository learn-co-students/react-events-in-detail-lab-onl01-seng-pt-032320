// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }
    
    render() {
        return <button onClick={this.handleClick}>Coordinates Button</button>
    }

}

export default CoordinatesButton 