import React from "react";
import { Link } from "react-router-dom"
import { NaviCoverDiv } from "../../Styled/Navigation/navigationStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
    return (
        <NaviCoverDiv>
            <div className="SideBar">
             <FontAwesomeIcon className="SideBarIcon" icon={faBars} size="3x" />
            </div>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">my profile</Link></li>
            </ul> */}
        </NaviCoverDiv> 
    );
}

export default Navigation;
