import React from 'react';
import styled from 'styled-components'

function InputSection() {
  return (
        <div>
            <select>
                <option>오늘 할 일 추가</option>
                <option>매일 할 일 추가</option>
            </select>
            <input type="text"></input>
            <button>완료!</button>
        </div>
  );
}

export default InputSection;
