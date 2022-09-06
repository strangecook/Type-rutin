import React, { useState } from 'react';
import { InputSectionContainer, InputSelect, InputBlank, InputButton } from '../../Styled/HomeStyle/InputSectionStyled';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { dbService } from "../../firebase";

function InputSection() {

  const [text, setText] = useState("")
  const [selectBox, setSelectBox] = useState("오늘 할 일 추가")

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setSelectBox(e.target.value)
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (selectBox === "오늘 할 일 추가") {
      await addDoc(collection(dbService, "todayList"), {
        text: text,
        change: false,
        achieve: false,
        createdAt: serverTimestamp(),
      })
    } else {
      await addDoc(collection(dbService, "EveryDayList"), {
        text: text,
        change: false,
        achieve: false,
        createdAt: serverTimestamp(),
      })
    }
    setText("")
  }

  return (
    <InputSectionContainer onSubmit={(e) => onSubmit(e)}>
      <InputSelect onChange={(e) => selectChange(e)} value={selectBox} >
        <option>오늘 할 일 추가</option>
        <option>매일 할 일 추가</option>
      </InputSelect>
      <InputBlank onChange={(e) => onChange(e)} value={text} placeholder='할 일을 입력해주세요' type="text"></InputBlank>
      <InputButton type="submit" value="완료!" ></InputButton>
    </InputSectionContainer>
  );
}

export default InputSection;
