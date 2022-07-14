import styled from 'styled-components';
export const Wrapper = styled.li`
    & > a{
        align-items:center;
        color:${({theme}) => theme.colors.white};
        height:3rem;
        display:flex;
        font-size:1.7rem;
        font-weight:500;
        justify-content:center;
        letter-spacing:.1;
        padding:0 .85rem;
        position:relative;
        transition:.15s linear color;
        &::before{
            background-color:${({theme}) => theme.colors.brown};
            border-radius:2rem;
            bottom:0;
            left:0;
            height:.3rem;
            transition:.2s ease-in-out width;
            width:0%;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.red};
            &::before{
                width:100%;
            }
        }
    }
    @media only screen {
        @media (max-width:500px){
            & > a{
                color:${({theme}) => theme.colors.black};
                font-size:1.5rem;
            }    
        }
    }
`