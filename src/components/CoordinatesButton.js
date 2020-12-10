// Code CoordinatesButton Component Here

import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
 
    findCoordinates = (event) => {
        const coordinates = ["X","Y"]
        ["X","Y"] = (event.clientX,event.clientY)
    }

    render(){
        return(
            <div>
                {this.props.onReceiveCoordinates}
                <button type="submit" onClick={this.findCoordinates} />
                {this.onReceiveCoordinates}
            </div>
        )
    }
}