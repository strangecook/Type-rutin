import React, { useState, } from 'react';
import { TodayTodoChange, TodayTodoComplete, TodayTodoTextFinish, TodayTodo, TodayTodoInput, TodayTodoNumber, TodayTodoText, TodayTodoFix, TodayTodoDel } from '../../Styled/HomeStyle/TodayStyled';
import { doc, updateDoc, deleteDoc } from "firebase/firestore"
import { dbService } from "../../firebase";

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

function DoneTaskList({ eachData, idx }: props): React.ReactElement {

  const [changeText, setChangeText] = useState(`${eachData.text}`)

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
    <TodayTodo>
    <TodayTodoInput type="checkbox"></TodayTodoInput>
    <TodayTodoNumber>{idx + 1}.</TodayTodoNumber>
        {eachData.achieve
          ?
          <TodayTodoTextFinish>{eachData.text}</TodayTodoTextFinish>
          :
          <TodayTodoText>{eachData.text}</TodayTodoText>
        }
  </TodayTodo>

  </> 
      
  );
}

export default DoneTaskList;
