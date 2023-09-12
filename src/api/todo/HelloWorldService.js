import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get("http://localhost:8080/hello-world")
    }

    executeHelloWorldBeanService() {
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    executeHelloWorldPathVariableService(name) {
        let username = 'lordWillfer'
        let password = 'pass12345'
        let basciAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`)
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`,
        {
            headers: {
                authorization: basciAuthHeader
            }
        })
    }
}

const helloWorldService = new HelloWorldService()
export default helloWorldService