import styled from 'styled-components'

export const DoneWorksComponent = styled.div`
background-color: rgb(205, 209, 201);
position: absolute;
display: grid;
grid-template-rows: repeat(12, 1fr);
grid-template-columns: 15% 35% 35% 15%;
grid-template-areas:
" navi navi navi navi "
" side . . ."
" side DoneTask DoneTask ."
" side DoneTask DoneTask ."
" side DoneTask DoneTask ."
" side DoneTask DoneTask ."
" side DoneTask DoneTask ."
" side DoneTask DoneTask ."
" side DoneTask DoneTask ."
" side DoneTask DoneTask ."
" side DoneTask DoneTask ."
" side . . .";
top: 0;
left: 0;
width: 100vw;
height: 100vh;
`