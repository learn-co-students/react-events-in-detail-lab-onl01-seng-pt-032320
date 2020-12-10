// Code CoordinatesButton Component Here

import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
 
    findCoordinates = (event) => {
        const coordinates = [event.clientX,event.clientY]
        let X = coordinates[0]
        let Y = coordinates[1]
    }

   

    render(){
        return(
            <div>
                {this.props.onReceiveCoordinates()} 
                <button type="submit" onClick={this.findCoordinates} />
            </div>
        )
    }
}