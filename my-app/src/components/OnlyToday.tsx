import React from 'react';
import { TodayComponent, TodayTitle, TodayTodo, TodayTodoInput, TodayTodoNumber, TodayTodoText, TodayTodoFix, TodayTodoDel } from '../Styled/TodayStyled';
import { TodayData } from '../dummy/todayData';
import { useState } from 'react';

function OnlyToday() {
  return (
        <TodayComponent>
            <TodayTitle>
              오늘 할 일 리스트
            </TodayTitle>
            {
              TodayData.map((el,idx)=>{
                return <TodayTodo>
                  <TodayTodoInput type="checkbox"></TodayTodoInput>
                  <TodayTodoNumber>{idx+1}.</TodayTodoNumber>
                  <TodayTodoText>{el.data}</TodayTodoText>
                  <TodayTodoFix>수정</TodayTodoFix>
                  <TodayTodoDel>삭제</TodayTodoDel>
                </TodayTodo>
              })
            }
            {/* <TodayTodo>
              <TodayTodoInput type="checkbox"></TodayTodoInput>
              <TodayTodoNumber>1.</TodayTodoNumber>
              <TodayTodoText>이게 매일 할일 1이다</TodayTodoText>
              <TodayTodoFix>수정</TodayTodoFix>
              <TodayTodoDel>삭제</TodayTodoDel>
            </TodayTodo> */}
        </TodayComponent>
  );
}

export default OnlyToday;
