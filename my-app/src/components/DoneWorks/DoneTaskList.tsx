import React, { useState, } from 'react';
import { TodayTodoChange, TodayTodoComplete, TodayTodoTextFinish, TodayTodo, TodayTodoInput, TodayTodoNumber, TodayTodoText, TodayTodoFix, TodayTodoDel } from '../../Styled/HomeStyle/TodayStyled';

interface props {
  eachData: {
    id: string,
    text: string,
    change: boolean,
    achieve: boolean,
    createdAt: {
      nanoseconds: number,
      seconds: number
    }
  },
  idx: number
}

function DoneTaskList({ eachData, idx }: props): React.ReactElement {

  return (
    <>
    <TodayTodo>
    <TodayTodoInput type="checkbox"></TodayTodoInput>
    <TodayTodoNumber>{idx + 1}.</TodayTodoNumber>
        {eachData.achieve
          ?
          <TodayTodoTextFinish>{eachData.text}</TodayTodoTextFinish>
          :
          <TodayTodoText>{eachData.text}</TodayTodoText>
        }
  </TodayTodo>

  </> 
      
  );
}

export default DoneTaskList;
