import React from "react";
import { Link } from "react-router-dom"
import { NaviCoverDiv } from "../../Styled/Navigation/navigationStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SidebarStore from "../../store/sidebarStore"

function Navigation() {
    const { increasePopulation } = SidebarStore();

    const SideChange = () =>{
        increasePopulation()
    }
    return (
        <NaviCoverDiv>
            <div className="SideBar">
             <FontAwesomeIcon onClick={()=>SideChange()} className="SideBarIcon" icon={faBars} size="3x" />
            </div>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">my profile</Link></li>
            </ul> */}
        </NaviCoverDiv> 
    );
}

export default Navigation;
