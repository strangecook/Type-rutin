import styled from 'styled-components'

export const HomeContainer = styled.div`
background-color: rgb(205, 209, 201);
position: absolute;
display: grid;
grid-template-rows: repeat(12, 1fr);
grid-template-columns: 15% 35% 35% 15%;
grid-template-areas:
" navi navi navi navi "
" side input input ."
" side . . ."
" side cal appr ."
" side cal appr ."
" side cal appr ."
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