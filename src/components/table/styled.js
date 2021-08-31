import styled from 'styled-components'

export const Container = styled.table`
    background-color: white;
    width: 100%;
`

export const Tr = styled.tr`
    background-color: ${({id, showColors}) => id % 2 == 0 && showColors ? 'green' : showColors ? 'orange' : 'transparent'};
    :hover {
        background-color: red;
    }
`

export const Th = styled.th`
`

export const Td = styled.td`
`

export const Image = styled.img`
    display: block;
    margin: auto;
`

export const P = styled.p`
    text-align: center;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0 5px 0 5px;
`