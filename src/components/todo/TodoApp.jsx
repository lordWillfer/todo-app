import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'
import withParams from "./withParams.jsx";
import AuthenticationService from "./AuthenticationService.js";

// Componente TODO App Principal (Padre)
class TodoApp extends Component {
    // Método que devuelve los elemtos renderizados del componente TodoApp a la vista
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                            <Route path="/" element={<LoginComponentWithNavigation />} />
                            <Route path="/login" element={<LoginComponentWithNavigation />} />
                            <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                            <Route path="/todos" element={<ListTodosComponent />} />
                            <Route path="*" element={<ErrorComponent />} />
                            <Route path="/logout" element={<LogoutComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/welcome/lordWillfer" className="navbar-brand">My TODO Application</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/lordWillfer">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-white">All Rights Reserved 2023 @lordWillfer</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You For Using Our Application.
                </div>
            </div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn Angular', done: false, targetDate: new Date() },
                    { id: 2, description: 'Learn React', done: false, targetDate: new Date() },
                    { id: 3, description: 'Learn Spring Boot', done: false, targetDate: new Date() }
                ]
        }
    }

    render() {
        return (
            <div>
                <h1>List TODOs</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

// Componente Welcome
class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.params.name}. You can manage your TODOs <Link to="/todos">here</Link>.
                </div>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at 1234-5678-9012</div>
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
            //console.log('Succesful')
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.navigate(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage: true})
            //this.setState({hasLoginFailed: false})
        } else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
            //console.log('Failed')
        }
        //console.log(this.state)
    }

    // Método que devuelve los elemtos renderizados del componente Login a la vista
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed} />
                <ShowLoginSuccessMessage showSuccessMessage = {this.state.showSuccessMessage} /> */}
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                                {this.state.showSuccessMessage && <div>Login Succesful</div>}
                                <div className="form-group">
                                    <label className="text-info" htmlFor="fc1">User Name</label>
                                    <input className="form-control" id="fc1" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label className="text-info" htmlFor="fc2">Password</label>
                                    <input className="form-control" id="fc2" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-info btn-md" onClick={this.loginClicked}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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