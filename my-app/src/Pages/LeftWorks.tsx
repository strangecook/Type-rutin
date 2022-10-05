import React from "react";
import { LeftWorksComponent } from "../Styled/LeftWorkStyled/LeftWorkStyled";
import Navigation from "../components/Navigation/Navigation";
import SideBar from "../components/Home/SideBar";
import TotalPercentage from "../components/LeftWorks/TotalPercentage";
import LeftTasks from "../components/LeftWorks/LeftTasks";

function LeftWorks() {
  return (
    <LeftWorksComponent>
      <Navigation />
      <SideBar />
      <TotalPercentage />
      <LeftTasks />
    </LeftWorksComponent>
  );
}

export default LeftWorks;
