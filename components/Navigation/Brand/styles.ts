import styled from 'styled-components';
export const Wrapper = styled.div`
    height:3rem;
    width:20rem;
    & > a {
        &,
        & > figure{
            align-items:center;
            display:flex;
            height:100%;
            justify-content:center;
            position:relative;
            width:100%;
        }
    }
    @media only screen {
        @media (max-width:600px){
            width:13rem;
        }
        @media (max-width:500px){
            order:1;
            width:13rem;
        }
        @media (max-width:300px){
            height:2rem;
            width:10rem;
        }
    }
`