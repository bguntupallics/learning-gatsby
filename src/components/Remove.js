import axios from "axios";
import React, {useState} from "react";
import "../styles/global.css"

function Remove(){
    const [response, setResponse] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setResponse(response);
        axios.delete("http://localhost:8080/api/delete/name/" + response).then(r => console.log(r.data)).catch(error => console.error(error));
        alert("Done");
    }

    return (
        <div className="login-box">
            <h2>Remove Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input type="text" name="" required="" value={response} onChange={str => setResponse(str.target.value)}/>
                    <label>Name</label>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Remove;