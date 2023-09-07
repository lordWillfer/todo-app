import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        console.log("Executed Service")
        return axios.get("http://localhost:8080/hello-world")
    }

    executeHelloWorldBeanService() {
        console.log("Executed Service")
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    executeHelloWorldPathVariableService(name) {
        console.log("Executed Service")
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
    }
}

const helloWorldService = new HelloWorldService()
export default helloWorldService