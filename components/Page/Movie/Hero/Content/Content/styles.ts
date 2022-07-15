import styled from 'styled-components';
export const Wrapper = styled.section`
    padding:.25rem .85rem;
    & > * {
        margin:2rem auto;
    }
    & > h1 {
        color:${({theme}) => theme.colors.red};
        font-family:${({theme}) => theme.fonts.family.heading};
        font-size:5.5rem;
        text-align:center;
    }
    & > p {
        color:hsla(0,100%,100%,.85);
        font-size:1.95rem;
        line-height:1.85;
        padding:.35rem .75rem;
        text-align:justify;
    }
    @media only screen {
        @media (max-width:1050px){
            & > h1{
                font-size:4.25rem;
            }    
        }
        @media (max-width:800px){
            padding:.25rem .45rem;
            & > p{
                font-size:1.75rem;
                line-height:1.65;
                padding:.35rem .25rem;
            }    
        }
        @media (max-width:350px){
            padding:.25rem .25rem;
            & > h1{
                font-size:3.25rem;
            }
            & > p{
                font-size:1.65rem;
                padding:.2rem .15rem;
            }    
        }
    }
`