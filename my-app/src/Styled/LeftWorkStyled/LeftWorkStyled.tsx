import styled from 'styled-components'

export const LeftWorksComponent = styled.div`
background-color: rgb(205, 209, 201);
position: absolute;
display: grid;
grid-template-rows: repeat(12, 1fr);
grid-template-columns: 15% 35% 35% 15%;
grid-template-areas:
" navi navi navi navi "
" side . . ."
" side total total ."
" side . . ."
" side . . ."
" side . . ."
" side . . ."
" side rutin today ."
" side rutin today ."
" side rutin today ."
" side rutin today ."
" side . . .";
top: 0;
left: 0;
width: 100vw;
height: 100vh;
`