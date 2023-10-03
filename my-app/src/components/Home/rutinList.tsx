import React, { useState, } from 'react';
import { TodayTodoChange, EveryTodoTextFinish, TodayTodoComplete, TodayTodo, TodayTodoNumber, TodayTodoText, TodayTodoFix, TodayTodoDel } from '../../Styled/HomeStyle/TodayStyled';
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

function RutinList({ eachData, idx }: props): React.ReactElement {

    const [changeText, setChangeText] = useState(eachData.text)
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
                            <EveryTodoTextFinish>{eachData.text}</EveryTodoTextFinish>
                            :
                            <TodayTodoText>{eachData.text}</TodayTodoText>
                        }
                        <TodayTodoComplete onClick={() => todoComplete()}>달성</TodayTodoComplete>
                        <TodayTodoFix onClick={() => changeCommit()}>수정</TodayTodoFix>
                        <TodayTodoDel onClick={() => DeleteCommit()}>삭제</TodayTodoDel>
                    </>}
            </TodayTodo>
        </>
    );
}

export default RutinList;
