import styled from 'styled-components'

export const RutinComponent = styled.div`
grid-area: rutin;
border-radius: 10px;
background-color:#DAECF5;
border: 1px solid black;
overflow: hidden;
margin: 0 5px 0 0;
`

export const RutinTitle = styled.div`
text-align: center;
font-size: large;
background-color: #7FBDDC;
overflow: hidden;
border-radius: 5px 5px 0 0;
border-bottom: 1px solid black;
`
export const RutinTodo = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 10px;
    `
export const RutinTodoInput = styled.input`
grid-column: 1/2;
`
export const RutinTodoNumber = styled.div`
grid-column: 2/3;
text-align: right;
line-height: 25px;
`
export const RutinTodoText = styled.div`
grid-column: 3/11;
`
export const RutinTodoFix = styled.button`
grid-column: 11/12;
`
export const RutinTodoDel = styled.button`
grid-column: 12/13;
`