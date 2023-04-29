import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <div className = "container">
                <div className = "card center" id = "login-card">
                    <div className = "card-header bg-dark text-white">
                        <h3>Account Login</h3>
                    </div>
                    <div className = "card-body">
                        <form>
                            <div className = "mb-3">
                                <label for = "username" className = "form-label"><b>Username:</b></label><br></br> 
                                    <input type = "text" id = "username" placeholder = "Type Username Here" className = "center"></input>
                            </div>
                            <div className = "mb-3">
                                <label for = "password" className = "form-label"><b>Password: </b></label><br></br>   
                                <input type = "text" id = "password" placeholder = "Type Password Here" className = "center"></input>
                            </div>
                            <button type = "submit" value = "submit" className = "btn btn-dark">Enter</button>
                        </form>
                    </div>
                    <div className = "card-footer">
                        Forgot Your Password? Click <a href = "#" className = "hyperlink">Here!</a>
                    </div>
                </div>
          </div>  
        );
    }
}
