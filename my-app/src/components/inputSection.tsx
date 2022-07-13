import React from 'react';
import styled from 'styled-components'
import { InputSectionContainer } from '../Styled/InputSectionStyled';

function InputSection() {
  return (
        <InputSectionContainer>
            <select>
                <option>오늘 할 일 추가</option>
                <option>매일 할 일 추가</option>
            </select>
            <input type="text"></input>
            <button>완료!</button>
        </InputSectionContainer>
  );
}

export default InputSection;
