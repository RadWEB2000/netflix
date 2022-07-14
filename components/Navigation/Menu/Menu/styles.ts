import styled from 'styled-components';
export const Wrapper = styled.menu`
    align-items:center;
    display:flex;
    flex-flow:row;
    justify-content:flex-start;
    gap:.85rem;
    padding:0 .85rem;
    @media only screen {
        @media (max-width:500px){
            flex-flow:row wrap;
            justify-content:center;
        }
        @media (max-width:320px){
            flex-flow:column;
            justify-content:center;
        }
    }
`