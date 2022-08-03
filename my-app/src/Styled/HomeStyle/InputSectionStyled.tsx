import styled from 'styled-components'

export const InputSectionContainer = styled.form`
grid-area: input;
display: grid;
grid-template-columns: repeat(6,1fr);
grid-template-rows: repeat(2,1fr);
`

export const InputSelect = styled.select`
    grid-column: 1/2;
    grid-row: 1/2;
    margin: 0 10px 0 0;
    border-radius: 5px;
`

export const InputBlank = styled.input`
    grid-column: 2/7;
    grid-row: 1/2;
    border: 0;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    ::placeholder {
    color: green;
    font-size: 1rem;
}
`

export const InputButton = styled.input`
    grid-column: 6/7;
    grid-row: 1/2;
    width: 80%;
    border: 0;
    margin: 8px;
    background-color: #a3a1a1;
    color: black;
    border-radius: 5px;
    transition: transform 300ms ease;

    :hover {
    background-color: #a3a1a1;
    color: #e3dede;
    transform: scale(1.05);
    }
`