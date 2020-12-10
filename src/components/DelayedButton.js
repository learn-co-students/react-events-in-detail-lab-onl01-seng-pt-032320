// Code DelayedButton Component Here

import React, {Component} from 'react';

export default class DelayedButton extends Component {

    render(){
        return(
            <div>
                {this.props.onDelayedClick}
                <button onClick={this.findCoordinates} />
            </div>
        )
    }
}