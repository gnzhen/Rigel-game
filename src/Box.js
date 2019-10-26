import React from 'react';
import './Box.css';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var colorClass = "box-" + this.props.color;
    return <button className={"box " + colorClass}
      onClick={this.props.clickEvent}></button>
  }
}

export default Box;
