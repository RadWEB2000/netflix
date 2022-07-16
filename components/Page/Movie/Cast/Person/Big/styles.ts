import styled from 'styled-components';
export const Wrapper = styled.li`
    max-width:95%;
    width:25rem;
    &> figure{
        aspect-ratio:1/1;
        border-radius:2rem;
        overflow:hidden;
        position:relative;
        user-select:none;
        width:100%;
    }
    & > figcaption{
        text-align:center;
        & > h3{
            color:${({theme}) => theme.colors.white};
            font-size:2.1rem;
        }
        & > h4{
            color:${({theme}) => theme.colors.red};
            font-size:1.8rem;
        }
    }
    @media only screen {
        @media (max-width:1450px){
            width:20.5rem;

        }
        @media (max-width:1280px){
            width:15.5rem;

        }
    }
`