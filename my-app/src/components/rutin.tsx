import React from 'react';
import { RutinComponent, RutinTitle, RutinTodo, RutinTodoNumber, RutinTodoInput, RutinTodoText, RutinTodoFix, RutinTodoDel } from '../Styled/RutinStyled';

function Rutin() {
  return (
        <RutinComponent>
            <RutinTitle>
              매일 할 일 리스트
            </RutinTitle>
            <RutinTodo>
              <RutinTodoInput type="checkbox"></RutinTodoInput>
              <RutinTodoNumber>1.</RutinTodoNumber>
              <RutinTodoText>이게 매일 할일 1이다</RutinTodoText>
              <RutinTodoFix>수정</RutinTodoFix>
              <RutinTodoDel>삭제</RutinTodoDel>
            </RutinTodo>
        </RutinComponent>
  );
}

export default Rutin;
