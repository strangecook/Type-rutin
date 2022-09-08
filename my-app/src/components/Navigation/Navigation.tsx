import React from "react";
import { Link } from "react-router-dom"
import { NaviCoverDiv } from "../../Styled/Navigation/navigationStyle"

function Navigation() {
    return (
        <NaviCoverDiv>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">my profile</Link></li>
            </ul>
        </NaviCoverDiv>
    );
}

export default Navigation;
