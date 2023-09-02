import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'
import withParams from "./withParams.jsx";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";

// Componente TODO App Principal (Padre)
class TodoApp extends Component {
    // Método que devuelve los elemtos renderizados del componente TodoApp a la vista
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="*" element={<ErrorComponent />} />
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />
                        <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponent /></AuthenticatedRoute>} />
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

// Definiendo el componente principal que debe renderizar a la vista
export default TodoApp