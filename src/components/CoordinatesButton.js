import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    constructor(props) {
        super(props)
    }

    
    render() {
        let coordinates = (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])        
        return (
            <div>
                <button type="button" onClick={coordinates}>Get Coordinates</button>
            </div>
        )
    }
}


