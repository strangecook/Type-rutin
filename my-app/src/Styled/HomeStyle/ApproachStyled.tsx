import styled from 'styled-components'

export const ApproachContainer = styled.div`
grid-area: appr;
border-radius: 10px;
background-color: white;
border: 1px solid black;
overflow: hidden;
margin: 0 0 0 5px;
height: 150%;
`

export const ChartDiv = styled.div`
    height: 270px;
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas: 
    " . . . . . . "
    " todayApproach TAG TAG TAG TAG TAG "
    " . . . . . . "
    " weekApproach WAG WAG WAG WAG WAG "
    " . . . . . . "
    " everyApproach EAG EAG EAG EAG EAG "
    " . . . . . . ";

    .todayApproach{
        grid-area: todayApproach;
        font-size: small;
    }
    .todayApproachGraph{
        grid-area: TAG;
    }
    .weekApproach{
        grid-area: weekApproach;
        font-size: small;
    }
    .weekApproachGraph{
        grid-area: WAG;
    }
    .everyApproach{
        grid-area: everyApproach;
        font-size: small;   
    }
    .everyApproachGraph{
        grid-area: EAG;
    }
`