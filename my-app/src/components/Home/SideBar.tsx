import React, { useState, useEffect } from 'react';
import { SideBarComponent } from '../../Styled/HomeStyle/SideBarStyled';
import SidebarStore from "../../store/sidebarStore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const { sideState } = SidebarStore();

  return (
    <SideBarComponent sideState={sideState}>
      <div className="sidebarcover">
        <div className="homeSide">
          <FontAwesomeIcon className='homeIcon' icon={faHome} size="3x"></FontAwesomeIcon>
          <div className='homeIconName' >홈페이지</div>
        </div>
        <div className="untodoList">
          <FontAwesomeIcon className='todolistIcon' icon={faCalendarCheck} size="3x"></FontAwesomeIcon>
          <div className='todolistIconName'>밀린 과제</div>
        </div>
      </div>
    </SideBarComponent>
  );
}

export default SideBar;
