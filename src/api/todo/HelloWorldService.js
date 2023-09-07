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
}

const helloWorldService = new HelloWorldService()
export default helloWorldService