import React, { useState, useEffect } from 'react';
import { DoneTaskComponent, DoneTaskTitle } from '../../Styled/DoneWorkStyled/DoneTaskStyled';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../../firebase";
import DoneTaskList from './DoneTaskList';

function DoneTask() {
  const [todayData, setTodayData] = useState<{
    id: string,
    text: string,
    change: boolean,
    achieve: boolean,
    createdAt: {
      nanoseconds: number,
      seconds: number
    }
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
    <DoneTaskComponent>
      <DoneTaskTitle>
        해결된 과제 리스트
      </DoneTaskTitle>
      {todayData.filter((data)=>{
        return data.achieve
      }).map((eachData, idx) => {
        return (
            <DoneTaskList eachData ={eachData} idx={idx} />
        )
      })}
    </DoneTaskComponent>
  );
}

export default DoneTask;
