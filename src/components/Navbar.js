import React from "react";
import { Link } from "gatsby";
import '../styles/global.css'

function Navbar() {

    return (
        <nav>
            <h1 className="main-title">Sports Hub</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/table">Employees</Link>
                <Link to="/add">Add</Link>
                <Link to="/remove">Remove</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    )
}

export default Navbar;