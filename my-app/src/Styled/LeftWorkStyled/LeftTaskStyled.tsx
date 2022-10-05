import styled from "styled-components";

export const LeftTaskComponent: JSX.Element | any = styled.div`
  grid-area: LeftTask;
  border-radius: 10px;
  background-color: #72abd5;
  border: 1px solid black;
  overflow: hidden;
  margin: 20px 0 0 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
//도대체 왜 에러가 생기는 것일까...? 찾아보기
export const LeftTaskTitle = styled.div`
  background-color: #7395d4;
  text-align: center;
  font-size: large;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid black;
`;
export const LeftTaskTodo = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 10px;

  .TodayTodoInput {
    grid-column: 1/2;
  }
  .LeftTaskTodoNumber {
    grid-column: 2/3;
    text-align: center;
    line-height: 25px;
  }
  .TodayTodoTextFinish {
    grid-column: 3/10;
    text-decoration: line-through;
    color: aliceblue;
  }
  .TodayTodoText {
    grid-column: 3/10;
  }
  .TodayTodoComplete {
    grid-column: 11/12;
    margin: 0 3px 0 3px;
    border: 3px solid #777baf;
    border-radius: 3px;
    transition: transform 300ms ease;

    :hover {
      background-color: #777baf;
      color: #e3dede;
      transform: scale(1.1);
    }
  }
  .TodayTodoDel {
    grid-column: 12/13;
    margin: 0 3px 0 3px;
    border: 3px solid #ff5f2e;
    border-radius: 3px;
    transition: transform 300ms ease;

    :hover {
      background-color: #ff5f2e;
      color: #e3dede;
      transform: scale(1.1);
    }
  }
`;
