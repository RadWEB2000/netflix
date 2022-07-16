import styled from 'styled-components';
export const Wrapper = styled.li`
    max-width:95%;
    width:18rem;
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
            font-size:1.8rem;
        }
        & > h4{
            color:${({theme}) => theme.colors.red};
            font-size:1.65rem;
        }
    }
    @media only screen {
        @media (max-width:1280px){
            width:14.5rem;

        }
    }
`