import React, { Component } from "react";
import { Link } from 'react-router-dom'
import HelloWorldService from "../../api/todo/HelloWorldService.js";

// Componente Welcome
class WelcomeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            welcomeMessage: ''
        }

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}. You can manage your TODOs <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here to get a cutomized welcome message.
                    <button className="btn btn-info btn-md" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </div>
        )
    }

    retrieveWelcomeMessage() {
        console.log("Retrieve clicked!")
        HelloWorldService.executeHelloWorldService().then(response => this.handleSuccessfulResponse(response));
    }

    handleSuccessfulResponse(response) {
        this.setState({welcomeMessage: response.data})
    }
}

export default WelcomeComponent