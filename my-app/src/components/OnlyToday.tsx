import React from 'react';
import styled from 'styled-components'
import { TodayComponent } from '../Styled/TodayStyled';

function OnlyToday() {
  return (
        <TodayComponent>
            <div>
              오늘 할일 목록
            </div>
            <div>
              <input type="checkbox"></input>
              <div>이게 오늘만 할일 1이다</div>
              <div>수정</div>
              <div>삭제</div>
            </div>
        </TodayComponent>
  );
}

export default OnlyToday;
