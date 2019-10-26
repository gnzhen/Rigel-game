import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoxSet from './BoxSet';
import * as serviceWorker from './serviceWorker';

var root = document.getElementById('root');

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.restart = this.restart.bind(this);
        this.lose = this.lose.bind(this);
        this.win = this.win.bind(this);
    }
    render() {
        return <BoxSet lose={this.lose} win={this.win}
            onRef={ref => (this.child = ref)} />
    }

    lose() {
        alert("Game Over! You lose!");
        this.restart();
    }

    win() {
        alert("Congratulations! You win!");
        this.restart();
    }
    restart = () => {
        this.child.show("set1")();
    }
}

ReactDOM.render(<Game />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
