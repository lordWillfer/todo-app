import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js"
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }

        this.refreshTodos = this.refreshTodos.bind(this)
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    // componentDidMount() se invoca inmediatamente después de montar un componente (insertarlo en el árbol). 
    // La inicialización que requiere nodos DOM debe ir aquí. Si necesita cargar datos desde un punto final remoto, 
    // este es un buen lugar para crear una instancia de la solicitud de red.
    componentDidMount() {
        this.refreshTodos()
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    this.setState({ todos: response.data })
                }
            )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({message: `Delete of todo ${id} Successful`})
                this.refreshTodos()
            }
        )
    }

    updateTodoClicked(id) {
        this.props.navigate(`/todos/${id}`)
    }

    addTodoClicked() {
        this.props.navigate('/todos/-1')
    }

    componentWillUnmount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    render() {
        return (
            <div>
                <h1>List TODOs</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm" onClick={() => this.updateTodoClicked(todo.id)}>Update</button>&nbsp;
                                                <button className="btn btn-danger btn-sm" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success btn-sm" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent