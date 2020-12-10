// Code CoordinatesButton Component Here

import React from 'react';

export default class CoordinatesButton extends Component {
 
    findCoordinates = (event) => {
        const [X,Y] = (event.clientX,event.clientY)
    }

    render(){
        return(
            <div>
                {this.props.onReceiveCoordinates}
                <button type="submit" onClick={this.findCoordinates} />
            </div>
        )
    }
}