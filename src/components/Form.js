import React, {useState} from "react";
import axios from "axios";
import "../styles/global.css"

//Add Employee
function Form(){
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setPosition(position);
        setName(name);
        axios.post('http://localhost:8080/api/add', {
            name: name,
            position: position
        }).then(r => console.log(r.data)).catch(error => console.error(error));
        alert("Done");
    }

    return (
        <div className="login-box">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input type="text" value={name} onChange={str => setName(str.target.value)}/>
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input type="text" value={position} onChange={str => setPosition(str.target.value)}/>
                    <label>Position</label>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Form;