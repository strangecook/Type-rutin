import React from "react";
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <div>
            Navigation
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">my profile</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;
