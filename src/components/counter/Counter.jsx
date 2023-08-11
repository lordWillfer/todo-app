import React, { Component } from "react";
import './Counter.css';

// Class Counter Component
class Counter extends Component {

    // Definir el estado inicial en un constructor
    // state => counter 0
    constructor() {
        super();// Error 1
        
        this.state = {
            counter: 0,
            secondCounter: 100
        }

        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <span className="count">{this.state.counter}</span>
                <span className="count">{this.state.secondCounter}</span>
            </div>
        );
    }

    increment() {
        // Actualizar el estado - counter++
        //console.log('Increment');
        this.setState({
            counter: this.state.counter + 1,
            secondCounter: this.state.secondCounter + 1
        });
    }
}


export default Counter;