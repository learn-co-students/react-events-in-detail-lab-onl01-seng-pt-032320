import React, { Component } from 'react';

class CoordinatesButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let callback = (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])
        return (
            <div>
                <button 
                    onClick = {callback}
                />
            </div>
        );
    }
}

export default CoordinatesButton;