class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
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
}

const authenticationService = new AuthenticationService()

export default authenticationService