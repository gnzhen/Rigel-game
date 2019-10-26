import React from 'react';
import './BoxSet.css';
import Box from './Box';

class BoxSet extends React.Component {
  constructor(props) {
    super(props);
    this.boxSetConfig = {
      set1: {
        white: this.show("set2"),
        red: this.show("set3"),
      },
      set2: {
        white: this.show("set3"),
        orange: this.show("set4"),
      },
      set3: {
        black: this.show("set4"),
        red: this.props.lose,
      },
      set4: {
        green: this.show("set5"),
        orange: this.show("set6"),
        black: this.show("set4"),
      },
      set5: {
        orange: this.props.lose,
        green: this.props.win,
      },
      set6: {
        orange: this.props.win,
        green: this.props.lose,
      },
    }
    this.state = {
      setNo: "set1",
    };

  }
  componentDidMount() {
    this.props.onRef(this);
  }
  render() {
    var boxes = this.createBoxes();
    return <div className="boxes" id="boxesId">
      {boxes}
    </div>
  }

  show(setNo) {
    return () => {
      let newState = Object.assign({}, this.state);
      newState.setNo = setNo;
      this.setState(newState);
    }
  }

  createBoxes() {
    var setNo = this.state.setNo;
    var config = this.boxSetConfig[setNo];
    var boxes = [];
    for (var color in config) {
      var clickEvent = config[color];
      var box = <Box color={color} clickEvent={clickEvent} />
      boxes.push(box);
    }
    return boxes;
  }
}


export default BoxSet;
