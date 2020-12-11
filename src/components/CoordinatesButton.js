// import React from 'react';
//
// export default class CoordinatesButton extends Component{
//
// handleClick = event => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}
//   render(){
//     return <button onClick={this.handleClick}>Coordinates</button>
//
//   }
// }


import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>Coords</button>;
  }
}

export default CoordinatesButton;
