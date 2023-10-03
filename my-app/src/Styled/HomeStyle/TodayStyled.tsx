import styled from 'styled-components'

export const TodayComponent :JSX.Element | any = styled.div`
grid-area: today;
border-radius: 10px;
background-color: #C5C5E7;
border: 1px solid black;
overflow: hidden;
margin: 0 0 0 5px;
overflow-y: scroll;
::-webkit-scrollbar{
  display:none;
}
`
//도대체 왜 에러가 생기는 것일까...? 찾아보기
export const TodayTitle = styled.div`
background-color:#999AD4;
text-align: center;
font-size: large;
overflow: hidden;
border-radius: 5px 5px 0 0;
border-bottom: 1px solid black;
`
export const TodayTodo = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 10px;
    height: 20px;
    `

export const TodayTodoNumber = styled.div`
grid-column: 2/3;
text-align: center;
line-height: 25px;
`
export const TodayTodoText = styled.div`
grid-column: 3/10;
font-size: small;
`
export const TodayTodoTextFinish = styled.div`
grid-column: 3/10;
text-decoration:line-through;
color: aliceblue;
font-size: small;
`
export const EveryTodoTextFinish = styled.div`
grid-column: 3/10;
text-decoration:line-through;
color: black;
font-size: small;
`
export const TodayTodoChange = styled.input`
grid-column: 3/10;
font-size: small;
`
export const TodayTodoComplete = styled.button`
grid-column: 10/11;
margin: 0 3px 0 3px;
border: 3px solid #777baf;
border-radius: 3px;
font-size: x-small;
height: 80%;
white-space: nowrap; /* 텍스트가 한 줄에 표시되도록 설정 */
  writing-mode: horizontal-tb; /* 텍스트를 가로로 표시 */
  text-orientation: upright; /* 텍스트 방향을 유지 */
  line-height: normal; /* 텍스트 줄 간격을 기본값으로 설정 */
transition: transform 300ms ease;

:hover {
    background-color: #777baf;
    color: #e3dede;
    transform: scale(1.1);
    }
`
export const TodayTodoFix = styled.button`
grid-column: 11/12;
margin: 0 3px 0 3px;
border: 3px solid #77af9c;
border-radius: 3px;
font-size: x-small;
height: 80%;
white-space: nowrap; /* 텍스트가 한 줄에 표시되도록 설정 */
  writing-mode: horizontal-tb; /* 텍스트를 가로로 표시 */
  text-orientation: upright; /* 텍스트 방향을 유지 */
  line-height: normal; /* 텍스트 줄 간격을 기본값으로 설정 */
transition: transform 300ms ease;

:hover {
    background-color: #77af9c;
    color: #e3dede;
    transform: scale(1.1);
    }
`
export const TodayTodoDel = styled.button`
grid-column: 12/13;
margin: 0 3px 0 3px;
border: 3px solid #ff5f2e;
border-radius: 3px;
font-size: x-small;
height: 80%;
white-space: nowrap; /* 텍스트가 한 줄에 표시되도록 설정 */
  writing-mode: horizontal-tb; /* 텍스트를 가로로 표시 */
  text-orientation: upright; /* 텍스트 방향을 유지 */
  line-height: normal; /* 텍스트 줄 간격을 기본값으로 설정 */
transition: transform 300ms ease;

:hover {
    background-color: #ff5f2e;
    color: #e3dede;
    transform: scale(1.1);
    }
`