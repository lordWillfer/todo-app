import React, { Component } from "react";
import PropTypes from "prop-types"
import './Counter.css';

// Class Counter Component
class Counter extends Component {
    render() {
        return (
          <div className="counter">
            <CounterButton />
            <CounterButton by={5} />
            <CounterButton by={10} />
          </div>
        );
      }
}

// Class CounterButton Component
class CounterButton extends Component {

    // Definir el estado inicial en un constructor
    // state => counter 0
    constructor() {
        super();// Error 1
        
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    increment() {
        // Actualizar el estado - counter++
        //console.log('Increment');
        this.setState({
            counter: this.state.counter + this.props.by
        });
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter;