import React, { useState, useEffect } from 'react';
import { TodayComponent, TodayTitle, TodayTodo, TodayTodoInput, TodayTodoNumber, TodayTodoText, TodayTodoFix, TodayTodoDel } from '../../Styled/HomeStyle/TodayStyled';
import { addDoc, deleteDoc , collection, serverTimestamp, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../../firebase";
import { FieldValue } from "@firebase/firestore";// @으로 임포트 해오면 해당 타입들이 적혀져 있다.

interface todayList {
    id: string,
    text: string,
    createdAt :FieldValue | null
  }

function TodayList({todayData}:todayList[]): React.ReactElement {

  return (
    <>
            {
              todayData.map((el,idx)=>{
                return <TodayTodo key={el.id}>
                  <TodayTodoInput type="checkbox"></TodayTodoInput>
                  <TodayTodoNumber>{idx+1}.</TodayTodoNumber>
                  <TodayTodoText>{el.text}</TodayTodoText>
                  <TodayTodoFix>수정</TodayTodoFix>
                  <TodayTodoDel>삭제</TodayTodoDel>
                </TodayTodo>
              })
            }
    </>
  );
}

export default TodayList;
