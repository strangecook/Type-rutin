import React, { useState, } from 'react';
import { TodayTodoChange, TodayTodoComplete, TodayTodoTextFinish, TodayTodo, TodayTodoInput, TodayTodoNumber, TodayTodoText, TodayTodoFix, TodayTodoDel } from '../../Styled/HomeStyle/TodayStyled';
import { doc, updateDoc, deleteDoc } from "firebase/firestore"
import { dbService } from "../../firebase";
import { getDayOfDiffer } from "../../function/DateCalculate"

interface props {
  eachData: {
    id: string,
    text: string,
    change: boolean,
    achieve: boolean,
    createdAt: {
      nanoseconds: number,
      seconds: number
    }
  },
  idx: number
}

function TodayList({ eachData, idx }: props): React.ReactElement {

  const [changeText, setChangeText] = useState("")
  const thisIsToday = new Date()
  const CreateTextDay = new Date(eachData.createdAt?.seconds*1000)

  const changeTextOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeText(e.target.value)
  }
  const TodayDataChange = doc(dbService, "todayList", `${eachData.id}`);

  const changeCommit = async () => {
    await updateDoc(TodayDataChange, {
      change: true,
    })
  }

  const DeleteCommit = async () => {
    try {
      await deleteDoc(TodayDataChange)
    } catch (err) {
      console.log(err)
    }
  }

  const changeCommitSet = async () => {
    await updateDoc(TodayDataChange, {
      change: false,
      text: changeText
    })
  }

  const changeCancle = async () => {
    await updateDoc(TodayDataChange, {
      change: false,
    })
  }

  const todoComplete = async () => {
    if (eachData.achieve) {
      await updateDoc(TodayDataChange, {
        achieve: false,
      })
    } else {
      await updateDoc(TodayDataChange, {
        achieve: true,
      })
    }
  }

  return (
    <>
    { getDayOfDiffer(thisIsToday, CreateTextDay) 
    ?<TodayTodo>
    <TodayTodoInput type="checkbox"></TodayTodoInput>
    <TodayTodoNumber>{idx + 1}.</TodayTodoNumber>
    {eachData.change
      ? <>
        <TodayTodoChange onChange={(e) => changeTextOnchange(e)} value={changeText} placeholder={eachData.text}></TodayTodoChange>
        <TodayTodoFix onClick={() => changeCommitSet()}>결정</TodayTodoFix>
        <TodayTodoDel onClick={() => changeCancle()}>취소</TodayTodoDel>
      </>
      : <>
        {eachData.achieve
          ?
          <TodayTodoTextFinish>{eachData.text}</TodayTodoTextFinish>
          :
          <TodayTodoText>{eachData.text}</TodayTodoText>
        }
        <TodayTodoComplete onClick={() => todoComplete()}>달성</TodayTodoComplete>
        <TodayTodoFix onClick={() => changeCommit()}>수정</TodayTodoFix>
        <TodayTodoDel onClick={() => DeleteCommit()}>삭제</TodayTodoDel>
      </>}
  </TodayTodo>
    
    :<></>
  }
  </> 
      
  );
}

export default TodayList;
