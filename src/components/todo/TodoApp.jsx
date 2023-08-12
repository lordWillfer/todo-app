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
            username: 'lorWillfer',
            password: ''
        }

        // Enlazando métodos de eventos del componente Login
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    // Método lanzado en el evento OnChange del elemento Username
    handleUsernameChange(event) {
        console.log(event.target.value);
        // Estableciendo el valor del estado del elemento username
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    // Método lanzado en el evento OnChange del elemento Password
    handlePasswordChange(event) {
        console.log(event.target.value);
        // Estableciendo el valor del estado del elemento password
        this.setState(
            {
                password: event.target.value
            }
        )
    }

    // Método que devuelve los elemtos renderizados del componente Login a la vista
    render() {
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                <button>Login</button>
            </div>
        )
    }
}

// Definiendo el componente principal que debe renderizar a la vista
export default TodoApp