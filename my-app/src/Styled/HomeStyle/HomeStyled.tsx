import styled from 'styled-components'

export const BodyPicture = styled.div`
width: 100vw;
height: 100vh;
background-image : url('https://marketplace.canva.com/EAD2xI0GoM0/1/0/1600w/canva-%ED%95%98%EB%8A%98-%EC%95%BC%EC%99%B8-%EC%9E%90%EC%97%B0-%EC%98%81%EA%B0%90-%EC%9D%B8%EC%9A%A9%EB%AC%B8-%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%86%B1-%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4-rssvAb9JL4I.jpg');
background-size: cover;
position: absolute;
top: 0;
left: 0;
`

export const HomeContainer = styled.div`
/* background-color: rgb(205, 209, 201); */
position: absolute;
display: grid;
grid-template-rows: repeat(13, 1fr);
grid-template-columns: 15% 35% 35% 15%;
grid-template-areas:
" side navi navi navi "
" side input input ."
" side . . ."
" side cal appr ."
" side cal appr ."
" side cal appr ."
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