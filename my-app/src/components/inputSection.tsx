import React from 'react';
import styled from 'styled-components'
import { InputSectionContainer, InputSelect, InputBlank, InputButton } from '../Styled/InputSectionStyled';

function InputSection() {
  return (
        <InputSectionContainer>
            <InputSelect>
                <option>오늘 할 일 추가</option>
                <option>매일 할 일 추가</option>
            </InputSelect>
            <InputBlank placeholder='할 일을 입력해주세요' type="text"></InputBlank>
            <InputButton>완료!</InputButton>
        </InputSectionContainer>
  );
}

export default InputSection;
