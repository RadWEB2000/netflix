import styled from 'styled-components';
export const Wrapper = styled.div`
    display:grid;
    grid-template-columns:3fr 3.5fr;
    margin:1rem auto;
    width:85%;
    @media only screen{
        @media (max-width:990px){
            align-items:center;
            display:flex;
            flex-flow:row wrap;
            row-gap:.45rem;
            &,
            & > * {
                justify-content:center;
            }
        }
    }
`