import React, { useState } from 'react';
import { HomeContainer } from '../Styled/HomeStyle/HomeStyled';
import InputSection from '../components/Home/inputSection';
import Rutin from '../components/Home/rutin';
import OnlyToday from '../components/Home/OnlyToday';
import Calender from '../components/Home/Calender'
import Approach from '../components/Home/Approach';
import { Unsubscribe } from "@firebase/auth";// @으로 임포트 해오면 해당 타입들이 적혀져 있다.

interface homeProps {
  isLoggedIn : boolean,
  userObj : Unsubscribe | {}
}


function Home({isLoggedIn, userObj}: homeProps) {
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
