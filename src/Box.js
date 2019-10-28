import React, { useState } from 'react';
import './Box.css';
import { Fade, Zoom, Slide, Grow } from '@material-ui/core';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  render() {
    if (!this.state.isShow)
      this.setState({ isShow: true });
    var isShow = this.state.isShow;
    var colorClass = "box-" + this.props.color;
    return <Grow in={isShow} {...(isShow ? { timeout: 1000 } : {})}>
      <button className={"box " + colorClass}
        onClick={this.props.clickEvent}></button>
    </Grow>

  }
}

export default Box;
