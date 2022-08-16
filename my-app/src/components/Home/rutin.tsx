import React, { useState, useEffect } from 'react';
import { RutinComponent, RutinTitle, RutinTodo, RutinTodoNumber, RutinTodoInput, RutinTodoText, RutinTodoFix, RutinTodoDel } from '../../Styled/HomeStyle/RutinStyled';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../../firebase";
import { FieldValue } from "@firebase/firestore";// @으로 임포트 해오면 해당 타입들이 적혀져 있다.

function Rutin() {
  const [rutinData, setRutinData] = useState<{
    id: string,
    text: string,
    createdAt: FieldValue | null
  }[]>([])

  useEffect(() => {
    const q = query(
      collection(dbService, "EveryDayList"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr: any = snapshot.docs.map((doc) => ({ // 먼저 any로 타입을 지정해줬는데 더 알아봐야한다. 다시본다면 생각해보자
        id: doc.id,
        text: doc.id,
        ...doc.data(),
      }));
      console.log(nweetArr)
      setRutinData(nweetArr);//또 막혔다 어떻게 처리해야하는 걸까..?
    });
  }, [])
  return (
    <RutinComponent>
      <RutinTitle>
        매일 할 일 리스트
      </RutinTitle>
      {rutinData.map((el) => {
        return <RutinTodo key={el.id}>
          <RutinTodoInput type="checkbox"></RutinTodoInput>
          <RutinTodoNumber>1.</RutinTodoNumber>
          <RutinTodoText>{el.text}</RutinTodoText>
          <RutinTodoFix>수정</RutinTodoFix>
          <RutinTodoDel>삭제</RutinTodoDel>
        </RutinTodo>
      })}

    </RutinComponent>
  );
}

export default Rutin;
