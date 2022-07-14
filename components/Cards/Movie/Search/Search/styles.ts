import styled from 'styled-components';
export const Wrapper = styled.header`
    display:grid;
    grid-template-columns:1.25fr 3fr;
    min-height:60rem;
    margin:.45rem auto;
    width:85%;
    @media only screen {
        @media (max-width:1450px){
            min-height:50rem;
            width:95%;
        }
        @media (max-width:1200px){
            grid-template-columns:1.5fr 2.75fr;
        }
        @media (max-width:1050px){
            grid-template-columns:1.65fr 2.5fr;
        }
        @media (max-width:750px){
            grid-template-columns:1.85fr 1.95fr;
        }
        @media (max-width:600px){
            display:flex;
            min-height:auto;
            flex-flow:column;
            width:85%;
        }
        @media (max-width:350px){
            width:95%;
        }
    }
`