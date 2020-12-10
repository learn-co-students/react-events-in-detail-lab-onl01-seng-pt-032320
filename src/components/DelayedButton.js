// Code DelayedButton Component Here

import React, {Component} from 'react';

export default class DelayedButton extends Component {


    handleDelay = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
            },
            this.props.delay)
        }

    render(){
        return(
            <div>
              
                <button onClick={this.handleDelay} />
            </div>
        )
    }
}