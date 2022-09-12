import styled from 'styled-components'

interface sidesomething {
    readonly sideState: boolean
}

export const SideBarComponent = styled.div<sidesomething>`
grid-area: side;
background-color: red;
position: absolute;
/* left: -70%; */
left: ${(props) => (props.sideState ? "-70%" : "0%")};
height: 100%;
transition: all 0.5s ease;
`
