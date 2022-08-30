import React, { useState } from 'react';
import { HomeContainer } from '../Styled/HomeStyle/HomeStyled';
import InputSection from '../components/Home/inputSection';
import Rutin from '../components/Home/rutin';
import OnlyToday from '../components/Home/OnlyToday';
import Calender from '../components/Home/Calender'
import Approach from '../components/Home/Approach';

function Home() {
  return (
    <HomeContainer>
      <InputSection />
      <Rutin />
      <OnlyToday />
      <Calender />
      <Approach />
    </HomeContainer>
  );
}

export default Home;
