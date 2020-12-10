// Code DelayedButton Component Here

import React, {Component} from 'react';

export default class DelayedButton extends Component {

    setTimeout = () => {
        this.props.delay 
    }

    render(){
        return(
            <div>
                {this.props.onDelayedClick}
                <button onClick={this.setTimeout} />
            </div>
        )
    }
}