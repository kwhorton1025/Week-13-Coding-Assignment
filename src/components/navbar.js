import React from "react";
import Login from "./login";

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className = "container">

                    <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
                    <img
                        src="https://phobelmarasia.com/wp-content/themes/ayro/assets/img/button-order.png"
                        alt="Logo"
                        width="75"
                        height="35"
                        class="d-inline-block align-text-top"
                    />
                        <a className = "navbar-brand" href = "#">Online Order Tracker</a>
                        <button className = "navbar-toggler" type="button" data-toggle="collapse"></button>

                        <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target = "#navbarNav" aria-controls = "navbarNav"></button>
                        <span className = "navbar-toggler-icon"></span>

                    <div className = "collapse navbar-collapse">
                        <div className = "collapse navbar-collapse" id = "navbarNav">
                            <ul className = "navbar-nav">
                                <li className = "nav-item">
                                    <a className = "nav-link" href = "#">Home</a>
                                </li>
                                <li className = "nav-item">
                                    <a className = "nav-link" href = "#">Account</a>
                                </li>
                                <li className = "nav-item">
                                    <a className = "nav-link" href = "#">Orders</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav><br></br><br></br>
                
                    <Login />
                </div>
            </div>
        );
    }
}