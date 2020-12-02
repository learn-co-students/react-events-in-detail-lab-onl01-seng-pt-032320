// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    render(){
        return (
            <button onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>Coordinate Button</button>
        )
    }
}

export default CoordinatesButton;