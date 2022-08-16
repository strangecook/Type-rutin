import styled from 'styled-components'

export const TodayComponent = styled.div`
grid-area: today;
border-radius: 10px;
background-color: #C5C5E7;
border: 1px solid black;
overflow: hidden;
margin: 0 0 0 5px;
`

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
    `
export const TodayTodoInput = styled.input`
grid-column: 1/2;
`
export const TodayTodoNumber = styled.div`
grid-column: 2/3;
text-align: center;
line-height: 25px;
`
export const TodayTodoText = styled.div`
grid-column: 3/11;
`
export const TodayTodoFix = styled.button`
grid-column: 11/12;
margin: 0 3px 0 0;
border: 3px solid #77af9c;
border-radius: 3px;
transition: transform 300ms ease;

:hover {
    background-color: #77af9c;
    color: #e3dede;
    transform: scale(1.1);
    }
`
export const TodayTodoDel = styled.button`
grid-column: 12/13;
margin: 0 0 0 3px;
border: 3px solid #ff5f2e;
border-radius: 3px;
transition: transform 300ms ease;

:hover {
    background-color: #ff5f2e;
    color: #e3dede;
    transform: scale(1.1);
    }
`