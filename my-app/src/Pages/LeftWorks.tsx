import React from 'react';
import { LeftWorksComponent } from '../Styled/LeftWorkStyled/LeftWorkStyled';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/Home/SideBar';

function LeftWorks() {
  return (
    <LeftWorksComponent>
      <Navigation />
      <SideBar />
    </LeftWorksComponent>
  );
}

export default LeftWorks;
