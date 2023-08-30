import React, { Component } from "react";

// Componente TODO App Principal (Padre)
class TodoApp extends Component {
    // Método que devuelve los elemtos renderizados del componente TodoApp a la vista
    render() {
        return (
            <div>
                <LoginComponent />
            </div>
        )
    }
}

// Componente Login Secundario (Hijo)
class LoginComponent extends Component {

    // Constructor de Login
    constructor(props) {
        super(props)

        // Establecimiento de estados de los elementos del componente Login
        this.state = {
            username: 'lordWillfer',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // Enlazando métodos de eventos del componente Login
        /* this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this) */
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    // Método gnérico lanzado en el evento OnChange del elemento
    handleChange(event) {
        // Imprimiendo en consola los valores de todos los elementos de estado del componente Login
        //console.log(this.state);
        // Estableciendo el valor del estado del elemento
        this.setState(
            {
                // Puede establecerse [event.target.name] en lugar del elemento estado de forma dinámica
                [event.target.name]: event.target.value
            }
        )
    }

    // Método lanzado en el evento OnChange del elemento Username
    /* handleUsernameChange(event) {
        console.log(event.target.value);
        // Estableciendo el valor del estado del elemento username
        this.setState(
            {
                // Puede establecerse [event.target.name] en lugar de username
                username: event.target.value
            }
        )
    } */

    // Método lanzado en el evento OnChange del elemento Password
    /* handlePasswordChange(event) {
        console.log(event.target.value);
        // Estableciendo el valor del estado del elemento password
        this.setState(
            {
                password: event.target.value
            }
        )
    } */

    loginClicked() {
        // lordWillfer, pass12345
        if (this.state.username === 'lordWillfer' && this.state.password === 'pass12345') {
            console.log('Succesful')
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        } else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
            console.log('Failed')
        }
        //console.log(this.state)
    }

    // Método que devuelve los elemtos renderizados del componente Login a la vista
    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed} />
                <ShowLoginSuccessMessage showSuccessMessage = {this.state.showSuccessMessage} /> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Succesful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// Function Component
/* function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null;
} */

// Function Component
/* function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Login Succesful</div>
    }
    return null;
} */

// Definiendo el componente principal que debe renderizar a la vista
export default TodoApp