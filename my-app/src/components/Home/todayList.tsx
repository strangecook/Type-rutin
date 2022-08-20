import React, { useState, useEffect } from 'react';
import { TodayComponent, TodayTitle, TodayTodo, TodayTodoInput, TodayTodoNumber, TodayTodoText, TodayTodoFix, TodayTodoDel } from '../../Styled/HomeStyle/TodayStyled';
import { doc, addDoc, updateDoc, deleteDoc, collection, serverTimestamp, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../../firebase";
import { FieldValue } from "@firebase/firestore";// @으로 임포트 해오면 해당 타입들이 적혀져 있다.

interface props {
  eachData: {
    id: string,
    text: string,
    change: boolean,
    createdAt: FieldValue | null
  },
  idx: number
}

function TodayList({ eachData, idx }: props): React.ReactElement {

  const TodayDataChange = doc(dbService, "todayList", `${eachData.change}`);

  const changeCommit = async () => {
    await updateDoc(TodayDataChange, {
      change: true,
    })
  }

  const DeleteCommit =async () => {
    await deleteDoc(TodayDataChange)
  }

  return (
    <>
      <TodayTodo key={eachData.id}>
        <TodayTodoInput type="checkbox"></TodayTodoInput>
        <TodayTodoNumber>{idx + 1}.</TodayTodoNumber>
        <TodayTodoText>{eachData.text}</TodayTodoText>
        <TodayTodoFix onClick={()=>changeCommit()}>수정</TodayTodoFix>
        <TodayTodoDel onClick={()=>DeleteCommit()}>삭제</TodayTodoDel>
      </TodayTodo>

    </>
  );
}

export default TodayList;
