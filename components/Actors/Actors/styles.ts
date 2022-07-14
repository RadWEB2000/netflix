import styled from 'styled-components';
export const Wrapper = styled.section`
    margin:4rem auto;
    width:95%;
    & > h2{
        color:${({theme}) => theme.colors.red};
        filter:brightness(85%);
        font-family:${({theme}) => theme.fonts.family.heading};
        font-size:5rem;
        letter-spacing:.55rem;
    }
    & > ul{
        display:grid;
        grid-template-columns:repeat(5,1fr);
        row-gap:.45rem;
    }
    @media only screen {
        @media (max-width:1450px){
            & > ul{
                grid-template-columns:repeat(4,1fr);
            }       
        }
        @media (max-width:1050px){
            & > ul{
                grid-template-columns:repeat(3,1fr);
            }       
        }
        @media (max-width:730px){
            & > ul{
                grid-template-columns:repeat(2,1fr);
            }       
        }
        @media (max-width:410px){
            & > ul{
                display:flex;
                flex-flow:row wrap;
                justify-content:center;
            }       
        }
    }

`