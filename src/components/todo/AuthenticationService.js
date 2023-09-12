import axios from "axios"

class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        let basciAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`)

        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(basciAuthHeader)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null)
            return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null)
            return ''
        return user
    }

    setupAxiosInterceptors(basciAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn())
                    config.headers.authorization = basciAuthHeader

                return config
            }
        )
    }
}

const authenticationService = new AuthenticationService()

export default authenticationService