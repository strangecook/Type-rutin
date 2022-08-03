import React from 'react';
import { AppContainer } from './Styled/HomeStyle/appStyled';
import InputSection from './components/Home/inputSection';
import Rutin from './components/Home/rutin';
import OnlyToday from './components/Home/OnlyToday';
import Calender from './components/Home/Calender'
import Approach from './components/Home/Approach';

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
