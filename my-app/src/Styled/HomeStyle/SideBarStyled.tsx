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

.sidebarcover{
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    .homeSide{
        display: flex;
        margin: 10px;
        border-radius: 10px;
        cursor: pointer;
        :hover{
            background-color: #B6BFE2;
            transition: all 0.5s ease;
        }
        .homeIcon{
            width: 40px;
            height: 40px;
            margin: 5px;
        }
        .homeIconName{
            font-size: 1.2em;
            line-height: 50px;
        }
    }
    .untodoList{
        margin: 10px;
        display: flex;
        border-radius: 10px;
        cursor: pointer;
        :hover{
            background-color: #B6BFE2;
            transition: all 0.5s ease;
        }
        .todolistIcon{
            width: 40px;
            height: 40px;
            margin: 5px;
        }
        .todolistIconName{
            font-size: 1.2em;
            line-height: 50px;
        }
    }
}
`
