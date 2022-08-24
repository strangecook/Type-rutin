import styled from 'styled-components'

export const HomeContainer = styled.div`
background-color: rgb(205, 209, 201);
position: absolute;
display: grid;
grid-template-rows: repeat(12, 1fr);
grid-template-columns: repeat(12, 1fr);
grid-template-areas:
". . . . . . . . . . . ."
". input input input input input input input input input input ."
". . . . . . . . . . . ."
". cal cal cal cal cal appr appr appr appr appr ."
". cal cal cal cal cal appr appr appr appr appr ."
". cal cal cal cal cal appr appr appr appr appr ."
". . . . . . . . . . . ."
". rutin rutin rutin rutin rutin today today today today today ."
". rutin rutin rutin rutin rutin today today today today today ."
". rutin rutin rutin rutin rutin today today today today today ."
". rutin rutin rutin rutin rutin today today today today today ."
". . . . . . . . . . . .";
top: 0;
left: 0;
width: 100%;
`