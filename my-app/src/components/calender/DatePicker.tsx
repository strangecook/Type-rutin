import React from 'react';
import { DatePickerBackGround } from '../../Styled/ComponentStyle/DatePickerStyle';

const DatePicker : React.FC<{}> = ({}) => {
  return (
        <div className='date-picker-container'>
            <DatePickerBackGround />

        </div>
  );
}

export default DatePicker;
