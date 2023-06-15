import React, {useState} from "react";
import axios from "axios";
import "../styles/global.css"

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setPassword(password);
        setUsername(username);
        axios.post('http://localhost:8080/login/register', {
            username: username,
            password: password
        }).then(r => console.log(r.data)).catch(error => console.error(error));
        alert("Done");
    }

    return (
        <div className="login-box">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input type="text" value={username} onChange={str => setUsername(str.target.value)}/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="text" value={password} onChange={str => setPassword(str.target.value)}/>
                    <label>Password</label>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Register;