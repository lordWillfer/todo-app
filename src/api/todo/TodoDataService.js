import axios from "axios"
import {JPA_API_URL} from "../../Constants.js"

class TodoDataService {
    retrieveAllTodos(username) {
        return axios.get(`${JPA_API_URL}/users/${username}/todos`)
    }

    retrieveTodo(username, id) {
        return axios.get(`${JPA_API_URL}/users/${username}/todos/${id}`)
    }

    deleteTodo(username, id) {
        return axios.delete(`${JPA_API_URL}/users/${username}/todos/${id}`)
    }

    updateTodo(username, id, todo) {
        return axios.put(`${JPA_API_URL}/users/${username}/todos/${id}`, todo)
    }

    createTodo(username, todo) {
        return axios.post(`${JPA_API_URL}/users/${username}/todos`, todo)
    }
}

const todoDataService = new TodoDataService()
export default todoDataService