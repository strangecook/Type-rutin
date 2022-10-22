import React from "react";
import { Link } from "react-router-dom";
import { NaviCoverDiv } from "../../Styled/Navigation/navigationStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import SidebarStore from "../../store/sidebarStore";

function Navigation() {
  const { sideState, increasePopulation } = SidebarStore();

  const SideChange = () => {
    increasePopulation();
  };
  return (
    <NaviCoverDiv>
      <div className="SideBar">
        {sideState ? (
          <FontAwesomeIcon
            onClick={() => SideChange()}
            className="SideBarIcon"
            icon={faX}
            size="3x"
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => SideChange()}
            className="SideBarIcon"
            icon={faBars}
            size="3x"
          />
        )}
      </div>
    </NaviCoverDiv>
  );
}

export default Navigation;
