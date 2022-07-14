import styled from 'styled-components';
export const Wrapper = styled.li`
    flex-flow:column;
    margin:auto;
    max-width:95%;
    row-gap:.85rem;
    padding:.12rem .15rem;
    width:25rem;
    &,
    & > a ,
    & > a > *{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > h3 {
        color:${({theme}) => theme.colors.white};
    }
    & > p {
        color:${({theme}) => theme.colors.white};
        opacity:.65;
        font-weight:800;
    }
    & > a {
        color:${({theme}) => theme.colors.twitter.regular};
        column-gap:.12rem;
        transition:.2s linear color;
        & > * {
            height:2rem;
        }
        &:hover{
            color:${({theme}) => theme.colors.twitter.hover};
        }
    }
    @media only screen {
        @media (max-width:500px){
            width:22rem;
        }
        @media (max-width:460px){
            width:20rem;
        }
    }
`