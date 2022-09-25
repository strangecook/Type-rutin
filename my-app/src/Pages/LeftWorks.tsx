import React from 'react';
import { LeftWorksComponent } from '../Styled/LeftWorkStyled/LeftWorkStyled';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/Home/SideBar';
import TotalPercentage from '../components/LeftWorks/TotalPercentage';

function LeftWorks() {
  return (
    <LeftWorksComponent>
      <Navigation />
      <SideBar />
      <TotalPercentage />
    </LeftWorksComponent>
  );
}

export default LeftWorks;
