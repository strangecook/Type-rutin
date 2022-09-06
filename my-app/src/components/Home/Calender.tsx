import React, { useState } from 'react';
import { CalenderContainer } from '../../Styled/HomeStyle/CalenderStyled';
// import 'react-calendar/dist/Calendar.css';
import '../../Styled/ComponentStyle/Calender.css';
import Calendar from 'react-calendar';

function Rutin() {
  const [value, onChange] = useState(new Date());
  return (
        <CalenderContainer>
          <Calendar onChange={onChange} value={value} />
        </CalenderContainer>
  );
}

export default Rutin;
