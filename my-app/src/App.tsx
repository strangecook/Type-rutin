import React from 'react';
import { AppContainer } from './Styled/HomeStyle/appStyled';
import InputSection from './Pages/Home/inputSection';
import Rutin from './Pages/Home/rutin';
import OnlyToday from './Pages/Home/OnlyToday';
import Calender from './Pages/Home/Calender'
import Approach from './Pages/Home/Approach';

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
