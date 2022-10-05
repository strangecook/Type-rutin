import React from "react";
import { LeftTaskTodo } from "../../Styled/LeftWorkStyled/LeftTaskStyled";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { dbService } from "../../firebase";

interface props {
  eachData: {
    id: string;
    text: string;
    change: boolean;
    achieve: boolean;
    createdAt: {
      nanoseconds: number;
      seconds: number;
    };
  };
  idx: number;
}

function TaskList({ eachData, idx }: props): React.ReactElement {
  const TodayDataChange = doc(dbService, "todayList", `${eachData.id}`);

  const DeleteCommit = async () => {
    try {
      await deleteDoc(TodayDataChange);
    } catch (err) {
      console.log(err);
    }
  };

  const todoComplete = async () => {
    if (eachData.achieve) {
      await updateDoc(TodayDataChange, {
        achieve: false,
      });
    } else {
      await updateDoc(TodayDataChange, {
        achieve: true,
      });
    }
  };

  return (
    <>
      <LeftTaskTodo>
        <div className="TodayTodoInput"></div>
        <div className="TodayTodoNumber">{idx + 1}</div>
        {eachData.achieve ? (
          <div className="TodayTodoTextFinish">{eachData.text}</div>
        ) : (
          <div className="TodayTodoText">{eachData.text}</div>
        )}
        <button onClick={todoComplete} className="TodayTodoComplete">
          달성
        </button>
        <button onClick={DeleteCommit} className="TodayTodoDel">
          삭제
        </button>
      </LeftTaskTodo>
    </>
  );
}

export default TaskList;
