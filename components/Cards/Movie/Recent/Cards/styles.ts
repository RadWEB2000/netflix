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
    & > ul {
        align-items:center;
        display:flex;
        justify-content:center;

    }
    @media only screen {
        @media (max-width:1450px){
            & > ul{
                overflow-x:scroll;
                justify-content:flex-start;
            }
        }
    }
`