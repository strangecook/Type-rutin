import React from 'react';
import styled from 'styled-components'
import { RutinComponent } from '../Styled/RutinStyled';

function Rutin() {
  return (
        <RutinComponent>
            <div>
              할일 목록
            </div>
            <div>
              <input type="checkbox"></input>
              <div>이게 매일 할일 1이다</div>
              <div>수정</div>
              <div>삭제</div>
            </div>
        </RutinComponent>
  );
}

export default Rutin;
