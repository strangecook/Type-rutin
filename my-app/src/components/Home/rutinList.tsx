import React, { useState, } from 'react';
import { TodayTodoChange, TodayTodo, TodayTodoInput, TodayTodoNumber, TodayTodoText, TodayTodoFix, TodayTodoDel } from '../../Styled/HomeStyle/TodayStyled';
import { doc, updateDoc, deleteDoc } from "firebase/firestore"
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

function RutinList({ eachData, idx }: props): React.ReactElement {

    const [changeText, setChangeText] = useState("")
    const changeTextOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChangeText(e.target.value)
    }
    const TodayDataChange = doc(dbService, "EveryDayList", `${eachData.id}`);

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

    return (
        <>
            <TodayTodo>
                <TodayTodoInput type="checkbox"></TodayTodoInput>
                <TodayTodoNumber>{idx + 1}.</TodayTodoNumber>
                {eachData.change
                    ? <>
                        <TodayTodoChange onChange={(e) => changeTextOnchange(e)} value={changeText} placeholder={eachData.text}></TodayTodoChange>
                        <TodayTodoFix onClick={() => changeCommitSet()}>결정</TodayTodoFix>
                        <TodayTodoDel onClick={() => changeCancle()}>취소</TodayTodoDel>
                    </>
                    : <>
                        <TodayTodoText>{eachData.text}</TodayTodoText>
                        <TodayTodoFix onClick={() => changeCommit()}>수정</TodayTodoFix>
                        <TodayTodoDel onClick={() => DeleteCommit()}>삭제</TodayTodoDel>
                    </>}
            </TodayTodo>
        </>
    );
}

export default RutinList;
