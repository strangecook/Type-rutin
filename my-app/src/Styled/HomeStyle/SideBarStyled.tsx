import styled from 'styled-components'

interface sidesomething {
    readonly sideState: boolean
}

export const SideBarComponent = styled.div<sidesomething>`
grid-area: side;
background-color: rgb(64, 85, 163, 0.5);
position: absolute;
width: 90%;
left: ${(props) => (props.sideState ? "0%" : "-100%")};
height: 100%;
transition: all 0.5s ease;
`
