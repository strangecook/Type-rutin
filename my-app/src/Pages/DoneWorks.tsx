import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/Home/SideBar';
import DoneTask from '../components/DoneWorks/DoneTask';
import { DoneWorksComponent } from '../Styled/DoneWorkStyled/DoneWorkStyled';

function DoneWorks() {
  return (
    <DoneWorksComponent>
      <Navigation />
      <SideBar />
      <DoneTask />
    </DoneWorksComponent>
  );
}

export default DoneWorks;
