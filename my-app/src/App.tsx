import React from 'react';
import styled from 'styled-components'
import { AppContainer } from './Styled/appStyled';
import InputSection from './components/inputSection';
import Rutin from './components/rutin';
import OnlyToday from './components/OnlyToday';
import Calender from './components/Calender'
import Approach from './components/Approach';

function App() {
  return (
        <AppContainer>
          <InputSection />
          <Rutin />
          <OnlyToday />
          <Calender />
          <Approach />
        </AppContainer>
  );
}

export default App;
