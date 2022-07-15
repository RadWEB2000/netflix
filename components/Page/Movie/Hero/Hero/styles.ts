import styled from 'styled-components';
export const Wrapper = styled.header`
    display:grid;
    grid-template-columns:2fr 2.5fr;
    min-height:70rem;
    margin:1rem auto;
    position:relative;
    width:95%;
    @media only screen{
        @media (max-width:1450px){
            grid-template-columns:1.5fr 2.5fr;
            min-height:60rem;
            width:98%;
        }
        @media (max-width:1120px){
            grid-template-columns:1.25fr 2.5fr;
        }
        @media (max-width:620px){
            grid-template-columns:1fr;
            width:95%;
        }
    }
`