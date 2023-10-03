import React, { useState } from 'react';
import { HomeContainer, BodyPicture } from '../Styled/HomeStyle/HomeStyled';
import InputSection from '../components/Home/inputSection';
import Rutin from '../components/Home/rutin';
import OnlyToday from '../components/Home/OnlyToday';
import Calender from '../components/Home/Calender'
import Approach from '../components/Home/Approach';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/Home/SideBar';

function Home() {
  return (
    <BodyPicture>
    <HomeContainer>
      <SideBar />
      <Navigation />
      <InputSection />
      <Rutin />
      <OnlyToday />
      <Calender />
      <Approach />
    </HomeContainer>
    </BodyPicture>
  );
}

export default Home;
