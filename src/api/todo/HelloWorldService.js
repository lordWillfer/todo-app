import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get("http://localhost:8080/hello-world")
    }

    executeHelloWorldBeanService() {
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
    }
}

const helloWorldService = new HelloWorldService()
export default helloWorldService