import React, { useState, useEffect } from 'react';
import { TodayComponent, TodayTitle } from '../../Styled/HomeStyle/TodayStyled';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../../firebase";
import { FieldValue } from "@firebase/firestore";// @으로 임포트 해오면 해당 타입들이 적혀져 있다.
import TodayList from './todayList';

function OnlyToday() {
  const [todayData, setTodayData] = useState<{
    id: string,
    text: string,
    change: boolean,
    createdAt: FieldValue | null
  }[]>([])

  useEffect(() => {
    const q = query(
      collection(dbService, "todayList"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr: any = snapshot.docs.map((doc) => ({ // 먼저 any로 타입을 지정해줬는데 더 알아봐야한다. 다시본다면 생각해보자
        id: doc.id,
        text: doc.id,
        boolean: doc.id,
        ...doc.data(),
      }));
      setTodayData(nweetArr);//또 막혔다 어떻게 처리해야하는 걸까..?
    });
  }, [])


  return (
    <TodayComponent>
      <TodayTitle>
        오늘 할 일 리스트
      </TodayTitle>
      {todayData.map((eachData, idx) => {
        return (
          <TodayList key={eachData.id} eachData={eachData} idx={idx} />
        )
      })}
    </TodayComponent>
  );
}

export default OnlyToday;
