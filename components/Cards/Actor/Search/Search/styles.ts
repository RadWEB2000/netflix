import styled from 'styled-components';
export const Wrapper = styled.header`
    display:grid;
    grid-template-columns:1.5fr 1fr;
    margin:1.5rem auto;
    min-height:65rem;
    width:85%;
    @media only screen {
        @media (max-width:1450px){
            grid-template-columns:1.15fr 1fr;
            min-height:55rem;
            width:90%;
        }
        @media (max-width:900px){
            grid-template-columns:.85fr 1fr;
            min-height:40rem;
            width:95%;
        }
        @media (max-width:700px){
            grid-template-columns:1.15fr 1fr;
        }
        @media (max-width:600px){
            align-items:center;
            display:flex;
            flex-flow:column;
            justify-content:center;
        }
    }
`