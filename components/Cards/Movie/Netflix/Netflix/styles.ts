import styled from 'styled-components';
export const Wrapper = styled.section`
    margin:4rem auto 2rem;
    width:95%;
    & > h2{
        color:${({theme}) => theme.colors.red};
        filter:brightness(85%);
        font-family:${({theme}) => theme.fonts.family.heading};
        font-size:5rem;
        letter-spacing:.55rem;
    }
    & > div {
        column-gap:.85rem;
        display:grid;
        grid-template-columns:1fr 1fr;
    }
    @media only screen {
        @media (max-width:1000px){
            & > div{
                grid-template-columns:1fr;
            }
        }
    }
`