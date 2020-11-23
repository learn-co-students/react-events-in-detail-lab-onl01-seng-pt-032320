import React, { Component } from 'react'

export default class DelayedButton extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        let func = (event) => {
            event.persist();
            window.setTimeout(() => {
                this.props.onDelayedClick(event)
            }, this.props.delay)
        }
        return (
            <div>
                <button type="button" onClick={func}>Click Me</button>
            </div>
        )
    }
}

