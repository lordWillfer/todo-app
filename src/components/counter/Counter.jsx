import React, { Component } from "react";
import PropTypes from "prop-types"
import './Counter.css';

// Class Counter Component
class Counter extends Component {

    // Definir el estado inicial en un constructor
    // state => counter 0
    constructor() {
        super();

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} />
                <CounterButton by={5} incrementMethod={this.increment} />
                <CounterButton by={10} incrementMethod={this.increment} />
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    increment(by) {
        //console.log(`Increment from child - ${by}`)
        this.setState({
            counter: this.state.counter + by
        });
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
            </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + this.props.by
        });

        this.props.incrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;