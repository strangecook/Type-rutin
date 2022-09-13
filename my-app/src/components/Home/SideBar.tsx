import React, { useState, useEffect } from 'react';
import { SideBarComponent } from '../../Styled/HomeStyle/SideBarStyled';
import SidebarStore from "../../store/sidebarStore"

function SideBar() {
    const { sideState } = SidebarStore();
    console.log("sideState",sideState)

  return (
    <SideBarComponent sideState={sideState}>여기가 사이드바</SideBarComponent>
  );
}

export default SideBar;
