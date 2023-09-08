import axios from "axios"

class TodoDataService {
    retrieveAllTodos(username) {
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }
}

const todoDataService = new TodoDataService()
export default todoDataService