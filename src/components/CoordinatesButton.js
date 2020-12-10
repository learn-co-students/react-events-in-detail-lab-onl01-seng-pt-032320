// Code CoordinatesButton Component Here

import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
 
    findCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX,event.clientY])
    }

   

    render(){
        return(
            <div>
                <button type="submit" onClick={this.findCoordinates} />
            </div>
        )
    }
}