import React from 'react';
import { LeftWorksComponent } from '../Styled/LeftWorkStyled/LeftWorkStyled';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/Home/SideBar';
import DoneTask from '../components/DoneWorks/DoneTask';

function DoneWorks() {
  return (
    <LeftWorksComponent>
      <Navigation />
      <SideBar />
      <DoneTask />
    </LeftWorksComponent>
  );
}

export default DoneWorks;
