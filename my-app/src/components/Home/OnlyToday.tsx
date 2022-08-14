import React, { useState, useEffect } from 'react';
import { TodayComponent, TodayTitle, TodayTodo, TodayTodoInput, TodayTodoNumber, TodayTodoText, TodayTodoFix, TodayTodoDel } from '../../Styled/HomeStyle/TodayStyled';
import { addDoc, collection, serverTimestamp, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../../firebase";
import { FieldValue } from "@firebase/firestore";// @으로 임포트 해오면 해당 타입들이 적혀져 있다.
// import { getData } from '../../Data/getData';
interface DataBaseType {
  id: string,
  text: string,
  createdAt :FieldValue | null
}

function OnlyToday() {
  const [todayData, setTodayData] = useState([])

  useEffect(()=>{
    const q = query(
      collection(dbService, "todayList"),
      orderBy("createdAt", "desc")
      );
      onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((doc) => ({
      id: doc.id,
      text: doc.id,
      ...doc.data(),
      }));
      console.log(nweetArr)
      // setTodayData(nweetArr);//또 막혔다 어떻게 처리해야하는 걸까..?
      });
  },[])

  console.log("todayData",todayData)

  return (
        <TodayComponent>
            <TodayTitle>
              오늘 할 일 리스트
            </TodayTitle>
            {/* {
              todayData.map((el,idx)=>{
                return <TodayTodo key={el.data}>
                  <TodayTodoInput type="checkbox"></TodayTodoInput>
                  <TodayTodoNumber>{idx+1}.</TodayTodoNumber>
                  <TodayTodoText>{el.data}</TodayTodoText>
                  <TodayTodoFix>수정</TodayTodoFix>
                  <TodayTodoDel>삭제</TodayTodoDel>
                </TodayTodo>
              })
            } */}
        </TodayComponent>
  );
}

export default OnlyToday;
