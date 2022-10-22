import React, { useState, useEffect } from "react";
import { SideBarComponent } from "../../Styled/HomeStyle/SideBarStyled";
import SidebarStore from "../../store/sidebarStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarCheck,
  faSadCry,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const { sideState } = SidebarStore();
  let navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  const goToLeftWorksPage = () => {
    navigate("/left");
  };
  const goToDoneWorksPage = () => {
    navigate("/done");
  };

  return (
    <SideBarComponent sideState={sideState}>
      <div className="sidebarcover">
        <div onClick={goToHomePage} className="homeSide">
          <FontAwesomeIcon
            className="homeIcon"
            icon={faHome}
            size="3x"
          ></FontAwesomeIcon>
          <div className="homeIconName">홈페이지</div>
        </div>
        <div onClick={goToLeftWorksPage} className="untodoList">
          <FontAwesomeIcon
            className="todolistIcon"
            icon={faSadCry}
            size="3x"
          ></FontAwesomeIcon>
          <div className="todolistIconName">밀린 과제</div>
        </div>
        <div onClick={goToDoneWorksPage} className="untodoList">
          <FontAwesomeIcon
            className="todolistIcon"
            icon={faCalendarCheck}
            size="3x"
          ></FontAwesomeIcon>
          <div className="todolistIconName">해결된 과제</div>
        </div>
      </div>
    </SideBarComponent>
  );
}

export default SideBar;
