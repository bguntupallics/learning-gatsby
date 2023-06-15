import React from "react";
import Navbar from "./Navbar";
import '../styles/global.css'

function Layout({children}){
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>Copyright Bhargav Guntupalli, 2023</footer>
        </div>
    );
}

export default Layout;