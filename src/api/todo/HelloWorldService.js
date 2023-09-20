import axios from "axios"
import {API_URL} from "../../Constants.js"

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get(`${API_URL}/hello-world`)
    }

    executeHelloWorldBeanService() {
        return axios.get(`${API_URL}/hello-world-bean`)
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`${API_URL}/hello-world-bean/path-variable/${name}`)
    }
}

const helloWorldService = new HelloWorldService()
export default helloWorldService