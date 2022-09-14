import styled from 'styled-components'

export const NaviCoverDiv = styled.div`
grid-area: navi;
background-color: rgb(64 85 163);
top: 0;
left: 0;
width: 100%;

.SideBar{
    margin: 20px;
    color: #EBECE9;
}

.SideBarIcon{
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.5s ease;
    :hover{
        background-color: #98A6D7;
    }
}
`